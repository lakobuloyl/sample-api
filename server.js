const hapi = require("@hapi/hapi");

const init = async () => {
    const server = hapi.Server({
        port: 300
    })
    server.route({
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "hello world"
        }
    }); 

    await server.start()
    console.log(`server start  ${server.info.uri}`)
}

process.on('unhandledRejection', (err)=> {
    console.log(err);
}) 

init();