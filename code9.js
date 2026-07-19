gdjs.train_32de_32vieCode = {};
gdjs.train_32de_32vieCode.localVariables = [];
gdjs.train_32de_32vieCode.idToCallbackMap = new Map();
gdjs.train_32de_32vieCode.GDtrain_9595de_9595vieObjects1= [];
gdjs.train_32de_32vieCode.GDtrain_9595de_9595vieObjects2= [];
gdjs.train_32de_32vieCode.GDautre_9595ecranObjects1= [];
gdjs.train_32de_32vieCode.GDautre_9595ecranObjects2= [];
gdjs.train_32de_32vieCode.GDsmaelObjects1= [];
gdjs.train_32de_32vieCode.GDsmaelObjects2= [];
gdjs.train_32de_32vieCode.GDballonObjects1= [];
gdjs.train_32de_32vieCode.GDballonObjects2= [];
gdjs.train_32de_32vieCode.GDfondu_9595noirObjects1= [];
gdjs.train_32de_32vieCode.GDfondu_9595noirObjects2= [];
gdjs.train_32de_32vieCode.GDcloud1Objects1= [];
gdjs.train_32de_32vieCode.GDcloud1Objects2= [];
gdjs.train_32de_32vieCode.GDDebugTextWeatherObjects1= [];
gdjs.train_32de_32vieCode.GDDebugTextWeatherObjects2= [];
gdjs.train_32de_32vieCode.GDfabienObjects1= [];
gdjs.train_32de_32vieCode.GDfabienObjects2= [];
gdjs.train_32de_32vieCode.GDclaudeObjects1= [];
gdjs.train_32de_32vieCode.GDclaudeObjects2= [];
gdjs.train_32de_32vieCode.GDbackgroundObjects1= [];
gdjs.train_32de_32vieCode.GDbackgroundObjects2= [];
gdjs.train_32de_32vieCode.GDballoon_9595no_9595levelObjects1= [];
gdjs.train_32de_32vieCode.GDballoon_9595no_9595levelObjects2= [];
gdjs.train_32de_32vieCode.GDBillieObjects1= [];
gdjs.train_32de_32vieCode.GDBillieObjects2= [];
gdjs.train_32de_32vieCode.GDDimitriObjects1= [];
gdjs.train_32de_32vieCode.GDDimitriObjects2= [];
gdjs.train_32de_32vieCode.GDRoroObjects1= [];
gdjs.train_32de_32vieCode.GDRoroObjects2= [];


gdjs.train_32de_32vieCode.mapOfGDgdjs_9546train_959532de_959532vieCode_9546GDautre_95959595ecranObjects1Objects = Hashtable.newFrom({"autre_ecran": gdjs.train_32de_32vieCode.GDautre_9595ecranObjects1});
gdjs.train_32de_32vieCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("autre_ecran"), gdjs.train_32de_32vieCode.GDautre_9595ecranObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.train_32de_32vieCode.mapOfGDgdjs_9546train_959532de_959532vieCode_9546GDautre_95959595ecranObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BAB", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.train_32de_32vieCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.train_32de_32vieCode.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.train_32de_32vieCode.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.train_32de_32vieCode.GDautre_9595ecranObjects1.length = 0;
gdjs.train_32de_32vieCode.GDautre_9595ecranObjects2.length = 0;
gdjs.train_32de_32vieCode.GDsmaelObjects1.length = 0;
gdjs.train_32de_32vieCode.GDsmaelObjects2.length = 0;
gdjs.train_32de_32vieCode.GDballonObjects1.length = 0;
gdjs.train_32de_32vieCode.GDballonObjects2.length = 0;
gdjs.train_32de_32vieCode.GDfondu_9595noirObjects1.length = 0;
gdjs.train_32de_32vieCode.GDfondu_9595noirObjects2.length = 0;
gdjs.train_32de_32vieCode.GDcloud1Objects1.length = 0;
gdjs.train_32de_32vieCode.GDcloud1Objects2.length = 0;
gdjs.train_32de_32vieCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.train_32de_32vieCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.train_32de_32vieCode.GDfabienObjects1.length = 0;
gdjs.train_32de_32vieCode.GDfabienObjects2.length = 0;
gdjs.train_32de_32vieCode.GDclaudeObjects1.length = 0;
gdjs.train_32de_32vieCode.GDclaudeObjects2.length = 0;
gdjs.train_32de_32vieCode.GDbackgroundObjects1.length = 0;
gdjs.train_32de_32vieCode.GDbackgroundObjects2.length = 0;
gdjs.train_32de_32vieCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.train_32de_32vieCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.train_32de_32vieCode.GDBillieObjects1.length = 0;
gdjs.train_32de_32vieCode.GDBillieObjects2.length = 0;
gdjs.train_32de_32vieCode.GDDimitriObjects1.length = 0;
gdjs.train_32de_32vieCode.GDDimitriObjects2.length = 0;
gdjs.train_32de_32vieCode.GDRoroObjects1.length = 0;
gdjs.train_32de_32vieCode.GDRoroObjects2.length = 0;

gdjs.train_32de_32vieCode.eventsList0(runtimeScene);
gdjs.train_32de_32vieCode.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.train_32de_32vieCode.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.train_32de_32vieCode.GDautre_9595ecranObjects1.length = 0;
gdjs.train_32de_32vieCode.GDautre_9595ecranObjects2.length = 0;
gdjs.train_32de_32vieCode.GDsmaelObjects1.length = 0;
gdjs.train_32de_32vieCode.GDsmaelObjects2.length = 0;
gdjs.train_32de_32vieCode.GDballonObjects1.length = 0;
gdjs.train_32de_32vieCode.GDballonObjects2.length = 0;
gdjs.train_32de_32vieCode.GDfondu_9595noirObjects1.length = 0;
gdjs.train_32de_32vieCode.GDfondu_9595noirObjects2.length = 0;
gdjs.train_32de_32vieCode.GDcloud1Objects1.length = 0;
gdjs.train_32de_32vieCode.GDcloud1Objects2.length = 0;
gdjs.train_32de_32vieCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.train_32de_32vieCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.train_32de_32vieCode.GDfabienObjects1.length = 0;
gdjs.train_32de_32vieCode.GDfabienObjects2.length = 0;
gdjs.train_32de_32vieCode.GDclaudeObjects1.length = 0;
gdjs.train_32de_32vieCode.GDclaudeObjects2.length = 0;
gdjs.train_32de_32vieCode.GDbackgroundObjects1.length = 0;
gdjs.train_32de_32vieCode.GDbackgroundObjects2.length = 0;
gdjs.train_32de_32vieCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.train_32de_32vieCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.train_32de_32vieCode.GDBillieObjects1.length = 0;
gdjs.train_32de_32vieCode.GDBillieObjects2.length = 0;
gdjs.train_32de_32vieCode.GDDimitriObjects1.length = 0;
gdjs.train_32de_32vieCode.GDDimitriObjects2.length = 0;
gdjs.train_32de_32vieCode.GDRoroObjects1.length = 0;
gdjs.train_32de_32vieCode.GDRoroObjects2.length = 0;


return;

}

gdjs['train_32de_32vieCode'] = gdjs.train_32de_32vieCode;
