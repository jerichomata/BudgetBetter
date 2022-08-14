require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");

const path = require("path");
const util = require("util");

const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || "sandbox";

const configuration = new Configuration({
  basePath: PlaidEnvironments[PLAID_ENV],
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": PLAID_CLIENT_ID,
      "PLAID-SECRET": PLAID_SECRET,
      "Plaid-Version": "2020-09-14",
    },
  },
});

const plaidClient = new PlaidApi(configuration);
// const plaidClient = new plaid.Client({
//   clientId: PLAID_CLIENT_ID,
//   secret: PLAID_SECRET,
//   env: PLAID_ENV,
// });

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/create_link_token", async (req, res, next) => {
  const { link_token: linkToken } = await plaidClient.createLinkToken({
    user: { client_user_id: "unique-id" },
    client_name: "Plaid's Tiny Quickstart",
    language: "en",
    products: ["auth", "identity"],
    country_codes: ["US"],
    // redirect_uri: process.env.PLAID_SANDBOX_REDIRECT_URI,
  });
  res.json({ linkToken });
});

app.post("/token-exchange", async (req, res) => {
  const { publicToken } = req.body;
  const { access_token: accessToken } = await plaidClient.exchangePublicToken(
    publicToken
  );

  const authResponse = await plaidClient.getAuth(accessToken);
  console.log("------------");
  console.log("Auth response");
  console.log(util.inspect(authResponse, false, null, true));

  const identityResponse = await plaidClient.getIdentity(accessToken);
  console.log("-----------");
  console.log("Identity response");
  console.log(util.inspect(identityResponse, false, null, true));

  const balanceResponse = await plaidClient.getBalance(accessToken);
  console.log("------------");
  console.log("Balance response:", balanceResponse);
  console.log(util.inspect(balanceResponse, false, null, true));

  res.sendStatus(200);
});

app.listen(process.env.PORT || 8080, () =>
  console.log("Server listening on port 8080")
);
