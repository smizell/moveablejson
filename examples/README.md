# Graphable JSON Follow Links Example

This Graphable JSON library will follow links when it finds them in place of regular properties. This means that if you query for `order` and it's missing, this library will look for `order_url` and resolve the link then continue traversing. 

It will also handle collections, which means if the property and link are not found, it will look for an `$item` property to iterate over. Once complete, it will look for a `next` entity, either included or linked as `next_url` or `nextUrl`.

This example shows all of these scenarios through a [sample API](https://graphablejsonapi.glitch.me/). You can navigate there and see what the API looks like. The examples included in the API are:

* `example0` shows an empty object
* `example1` shows a single embedded order object
* `example2` shows all of the order objects embedded
* `example3` shows `order_url` with links to each order
* `example4` shows `order_url` as a link to a paginated collection

## Usage

1. Clone this repository with `git clone https://github.com/smizell/graphablejson.git`
1. Install the code with `npm install`
1. Run the example `node examples/graphql-example.js example1` or `node examples/get-property.js example1`
1. Run other examples listed above

If you look at [graphql-example.js](graphql-example.js) and [get-property](get-property.js), you'll see the query never changes, yet the output is the same for each query. This allows the structure to evolve without breaking clients.
