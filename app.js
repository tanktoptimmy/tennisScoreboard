requirejs(['./dist/tennisScoreboard'], function createTennisScoreboard(TennisScoreboard) {
   TennisScoreboard.default({
        domNode: document.getElementById('tennisScoreboard'),
        reactData: {
            "_id":"21017707",
            "packetId":210,
            "timestamp":1500654493882,
            "meta": {
                "maxSets": 3,
                "players":[
                    ["Lukas Rosol"],
                    ["Alexey Vatutin"]
                ],
                "players_mob":[
                    [{"name":"L Rosol / L Vuitton","serving":false}],
                    [{"name":"A Vatutin / C Murray","serving":true}]
                ]
            },
            "completedSets":[
                [5,7],
                [6,3]
            ],
            "_setScore":[1,1],
            "_gameScore":[0,0],
            "_points":[15,30],
            "_onServe":[1,0],
            "_status":"P",
            "_statusDetail":"point",
            "_finished":"0",
            "provider":"img",
            "_statusText":"",
            "displayed":true,
            "last_update":{
                "$date":{
                    "$numberLong":"1500654493902"
                }
            }
        }
   }
)
});
