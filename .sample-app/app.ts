import { TpastreamApi } from "@fern-api/tpastream";

void main();

async function main() {
  const tpastreamToken = process.env.TPASTREAM_TOKEN;
  if (tpastreamToken == null) {
    console.error("TPASTREAM_TOKEN environment variable must be initialized.");
    return;
  }

  const tpastream = new TpastreamApi.Client({
    _origin: "https://app.tpastream.com/api/v2",
    apiKey: tpastreamToken,
  });

  const createResponse = await tpastream.claims.create({ 
    
  })
   
//   if (!createResponse.ok) {
//     throw new Error(
//       `Encountered error ${JSON.stringify(createResponse.error)}`
//     );
//   }

//   console.log(`The client's token is ${createResponse.body.clientToken}`);
// }