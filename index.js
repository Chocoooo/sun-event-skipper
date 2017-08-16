module.exports = function sunEventSkipper(dispatch) {
    
    let CID = null;
    let enabled = false;
    
    dispatch.hook('S_LOGIN', 1, event => {
        CID = event.cid;
        enabled = false;
    })
    
    dispatch.hook('S_SYSTEM_MESSAGE', 1, event => {
        if(event.message == '@2955\u000bquestTemplateId\u000b70105\u000btaskId\u000b2' || event.message == '@2955\u000bquestTemplateId\u000b70106\u000btaskId\u000b1') {
            enabled = true;
        }
            if(enabled) {
                if(event.message == '@909\u000bQuestName\u000b@quest:70105001' || event.message == '@909\u000bQuestName\u000b@quest:70105001') {
                    trashCanTelly1();
                }
                if(event.message == '@2955\u000bquestTemplateId\u000b70105\u000btaskId\u000b3' || event.message == '@2955\u000bquestTemplateId\u000b70105\u000btaskId\u000b4') {
                    npcTelly1();
                }
                if(event.message == '@2955\u000bquestTemplateId\u000b70105\u000btaskId\u000b5') {
                    npcTelly1();
                }
                if(event.message == '@909\u000bQuestName\u000b@quest:70106001') {
                    trashCanTelly2();
                }
                if(event.message == '@2955\u000bquestTemplateId\u000b70106\u000btaskId\u000b3') {
                    npcTelly2();
                }
                if(event.message == '@2955\u000bquestTemplateId\u000b70106\u000btaskId\u000b4') {
                    npcTelly2();
                }
                if(event.message == '@909\u000bQuestName\u000b@quest:70107001' || event.message == '@2955\u000bquestTemplateId\u000b70107\u000btaskId\u000b4' || event.message == '@2955\u000bquestTemplateId\u000b70107\u000btaskId\u000b3') {
                    enabled = false;
                    dispatch.toServer('C_RESET_ALL_DUNGEON', 1, {});
                }
            }
    })
    
    function trashCanTelly1() {
        dispatch.toClient('S_SPAWN_ME', 1, {
        target: CID,
        x: -22978.326171875,
        y: 73394.8203125,
        z: 102.13565826416016,
        w: -15460,
        alive: 1,
        unk: 0 
        })
    }
    
    function npcTelly1() {
        dispatch.toClient('S_SPAWN_ME', 1, {
        target: CID,
        x: -24373.16015625,
        y: 73548.9453125,
        z: 634.76318359375,
        w: 30258,
        alive: 1,
        unk: 0 
        }) 
    }
    
    function trashCanTelly2() {
        dispatch.toClient('S_SPAWN_ME', 1, {
        target: CID,
        x: -23449.6171875,
        y: 78881.7265625,
        z: 1088.3402099609375,
        w: 17082,
        alive: 1,
        unk: 0 
        })
    }
    
    function npcTelly2() {
        dispatch.toClient('S_SPAWN_ME', 1, {
        target: CID,
        x: -22962.443359375,
        y: 79300.9609375,
        z: 1093.68896484375,
        w: 16110,
        alive: 1,
        unk: 0 
        }) 
    }
}
