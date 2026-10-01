import { SquareClient, SquareEnvironment} from "square";
import {SQUARE_TOKEN} from "dotenv";

async function getcatalogdata() {
    const client = new SquareClient({
        environment: SquareEnvironment.Production,
        token: SQUARE_TOKEN,
    });
    const catalogList = await client.catalog.list({
        types: "ITEM_VARIATION",
    });
    for await (const item of catalogList) {
        var itemName = item.itemVariationData.priceMoney.amount
        console.log(itemName);
    }
}
getcatalogdata();


// 'The item is', [itemName], 'and the price is',[itemPrice] var itemPrice = item.itemVariationData.priceMoney