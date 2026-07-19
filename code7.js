gdjs.place_32de_32la_32mairieCode = {};
gdjs.place_32de_32la_32mairieCode.localVariables = [];
gdjs.place_32de_32la_32mairieCode.idToCallbackMap = new Map();
gdjs.place_32de_32la_32mairieCode.GDplace_9595de_9595la_9595mairieObjects1= [];
gdjs.place_32de_32la_32mairieCode.GDplace_9595de_9595la_9595mairieObjects2= [];
gdjs.place_32de_32la_32mairieCode.GDautres_9595ecranObjects1= [];
gdjs.place_32de_32la_32mairieCode.GDautres_9595ecranObjects2= [];
gdjs.place_32de_32la_32mairieCode.GDballonObjects1= [];
gdjs.place_32de_32la_32mairieCode.GDballonObjects2= [];
gdjs.place_32de_32la_32mairieCode.GDfondu_9595noirObjects1= [];
gdjs.place_32de_32la_32mairieCode.GDfondu_9595noirObjects2= [];
gdjs.place_32de_32la_32mairieCode.GDcloud1Objects1= [];
gdjs.place_32de_32la_32mairieCode.GDcloud1Objects2= [];
gdjs.place_32de_32la_32mairieCode.GDDebugTextWeatherObjects1= [];
gdjs.place_32de_32la_32mairieCode.GDDebugTextWeatherObjects2= [];
gdjs.place_32de_32la_32mairieCode.GDfabienObjects1= [];
gdjs.place_32de_32la_32mairieCode.GDfabienObjects2= [];
gdjs.place_32de_32la_32mairieCode.GDclaudeObjects1= [];
gdjs.place_32de_32la_32mairieCode.GDclaudeObjects2= [];
gdjs.place_32de_32la_32mairieCode.GDbackgroundObjects1= [];
gdjs.place_32de_32la_32mairieCode.GDbackgroundObjects2= [];
gdjs.place_32de_32la_32mairieCode.GDballoon_9595no_9595levelObjects1= [];
gdjs.place_32de_32la_32mairieCode.GDballoon_9595no_9595levelObjects2= [];
gdjs.place_32de_32la_32mairieCode.GDBillieObjects1= [];
gdjs.place_32de_32la_32mairieCode.GDBillieObjects2= [];
gdjs.place_32de_32la_32mairieCode.GDDimitriObjects1= [];
gdjs.place_32de_32la_32mairieCode.GDDimitriObjects2= [];
gdjs.place_32de_32la_32mairieCode.GDRoroObjects1= [];
gdjs.place_32de_32la_32mairieCode.GDRoroObjects2= [];


gdjs.place_32de_32la_32mairieCode.mapOfGDgdjs_9546place_959532de_959532la_959532mairieCode_9546GDautres_95959595ecranObjects1Objects = Hashtable.newFrom({"autres_ecran": gdjs.place_32de_32la_32mairieCode.GDautres_9595ecranObjects1});
gdjs.place_32de_32la_32mairieCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.7, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("autres_ecran"), gdjs.place_32de_32la_32mairieCode.GDautres_9595ecranObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.place_32de_32la_32mairieCode.mapOfGDgdjs_9546place_959532de_959532la_959532mairieCode_9546GDautres_95959595ecranObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "bouillon", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.place_32de_32la_32mairieCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.place_32de_32la_32mairieCode.GDplace_9595de_9595la_9595mairieObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDplace_9595de_9595la_9595mairieObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDautres_9595ecranObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDautres_9595ecranObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDballonObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDballonObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDfondu_9595noirObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDfondu_9595noirObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDcloud1Objects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDcloud1Objects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDfabienObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDfabienObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDclaudeObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDclaudeObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDbackgroundObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDbackgroundObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDBillieObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDBillieObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDDimitriObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDDimitriObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDRoroObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDRoroObjects2.length = 0;

gdjs.place_32de_32la_32mairieCode.eventsList0(runtimeScene);
gdjs.place_32de_32la_32mairieCode.GDplace_9595de_9595la_9595mairieObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDplace_9595de_9595la_9595mairieObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDautres_9595ecranObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDautres_9595ecranObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDballonObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDballonObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDfondu_9595noirObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDfondu_9595noirObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDcloud1Objects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDcloud1Objects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDfabienObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDfabienObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDclaudeObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDclaudeObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDbackgroundObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDbackgroundObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDBillieObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDBillieObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDDimitriObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDDimitriObjects2.length = 0;
gdjs.place_32de_32la_32mairieCode.GDRoroObjects1.length = 0;
gdjs.place_32de_32la_32mairieCode.GDRoroObjects2.length = 0;


return;

}

gdjs['place_32de_32la_32mairieCode'] = gdjs.place_32de_32la_32mairieCode;
