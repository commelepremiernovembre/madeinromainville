gdjs.trianonCode = {};
gdjs.trianonCode.localVariables = [];
gdjs.trianonCode.idToCallbackMap = new Map();
gdjs.trianonCode.GDanother_9595levelObjects1= [];
gdjs.trianonCode.GDanother_9595levelObjects2= [];
gdjs.trianonCode.GDballonObjects1= [];
gdjs.trianonCode.GDballonObjects2= [];
gdjs.trianonCode.GDfondu_9595noirObjects1= [];
gdjs.trianonCode.GDfondu_9595noirObjects2= [];
gdjs.trianonCode.GDcloud1Objects1= [];
gdjs.trianonCode.GDcloud1Objects2= [];
gdjs.trianonCode.GDDebugTextWeatherObjects1= [];
gdjs.trianonCode.GDDebugTextWeatherObjects2= [];
gdjs.trianonCode.GDfabienObjects1= [];
gdjs.trianonCode.GDfabienObjects2= [];
gdjs.trianonCode.GDclaudeObjects1= [];
gdjs.trianonCode.GDclaudeObjects2= [];
gdjs.trianonCode.GDbackgroundObjects1= [];
gdjs.trianonCode.GDbackgroundObjects2= [];
gdjs.trianonCode.GDballoon_9595no_9595levelObjects1= [];
gdjs.trianonCode.GDballoon_9595no_9595levelObjects2= [];
gdjs.trianonCode.GDmouetteObjects1= [];
gdjs.trianonCode.GDmouetteObjects2= [];
gdjs.trianonCode.GDwipObjects1= [];
gdjs.trianonCode.GDwipObjects2= [];
gdjs.trianonCode.GDRoroObjects1= [];
gdjs.trianonCode.GDRoroObjects2= [];
gdjs.trianonCode.GDPOLINAObjects1= [];
gdjs.trianonCode.GDPOLINAObjects2= [];
gdjs.trianonCode.GDDIMITRIObjects1= [];
gdjs.trianonCode.GDDIMITRIObjects2= [];
gdjs.trianonCode.GDluluObjects1= [];
gdjs.trianonCode.GDluluObjects2= [];
gdjs.trianonCode.GDioanaObjects1= [];
gdjs.trianonCode.GDioanaObjects2= [];
gdjs.trianonCode.GDpaolaObjects1= [];
gdjs.trianonCode.GDpaolaObjects2= [];
gdjs.trianonCode.GDservice_9595personne_9595mairieObjects1= [];
gdjs.trianonCode.GDservice_9595personne_9595mairieObjects2= [];
gdjs.trianonCode.GDtrain_9595de_9595vieObjects1= [];
gdjs.trianonCode.GDtrain_9595de_9595vieObjects2= [];
gdjs.trianonCode.GDbouillonObjects1= [];
gdjs.trianonCode.GDbouillonObjects2= [];
gdjs.trianonCode.GDluna_9595rossaObjects1= [];
gdjs.trianonCode.GDluna_9595rossaObjects2= [];
gdjs.trianonCode.GDtrianonObjects1= [];
gdjs.trianonCode.GDtrianonObjects2= [];
gdjs.trianonCode.GDmetroObjects1= [];
gdjs.trianonCode.GDmetroObjects2= [];
gdjs.trianonCode.GDmokaObjects1= [];
gdjs.trianonCode.GDmokaObjects2= [];
gdjs.trianonCode.GDbillieObjects1= [];
gdjs.trianonCode.GDbillieObjects2= [];


gdjs.trianonCode.mapOfGDgdjs_9546trianonCode_9546GDanother_95959595levelObjects1Objects = Hashtable.newFrom({"another_level": gdjs.trianonCode.GDanother_9595levelObjects1});
gdjs.trianonCode.eventsList0 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("another_level"), gdjs.trianonCode.GDanother_9595levelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.trianonCode.mapOfGDgdjs_9546trianonCode_9546GDanother_95959595levelObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "le metro", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.trianonCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.trianonCode.GDanother_9595levelObjects1.length = 0;
gdjs.trianonCode.GDanother_9595levelObjects2.length = 0;
gdjs.trianonCode.GDballonObjects1.length = 0;
gdjs.trianonCode.GDballonObjects2.length = 0;
gdjs.trianonCode.GDfondu_9595noirObjects1.length = 0;
gdjs.trianonCode.GDfondu_9595noirObjects2.length = 0;
gdjs.trianonCode.GDcloud1Objects1.length = 0;
gdjs.trianonCode.GDcloud1Objects2.length = 0;
gdjs.trianonCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.trianonCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.trianonCode.GDfabienObjects1.length = 0;
gdjs.trianonCode.GDfabienObjects2.length = 0;
gdjs.trianonCode.GDclaudeObjects1.length = 0;
gdjs.trianonCode.GDclaudeObjects2.length = 0;
gdjs.trianonCode.GDbackgroundObjects1.length = 0;
gdjs.trianonCode.GDbackgroundObjects2.length = 0;
gdjs.trianonCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.trianonCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.trianonCode.GDmouetteObjects1.length = 0;
gdjs.trianonCode.GDmouetteObjects2.length = 0;
gdjs.trianonCode.GDwipObjects1.length = 0;
gdjs.trianonCode.GDwipObjects2.length = 0;
gdjs.trianonCode.GDRoroObjects1.length = 0;
gdjs.trianonCode.GDRoroObjects2.length = 0;
gdjs.trianonCode.GDPOLINAObjects1.length = 0;
gdjs.trianonCode.GDPOLINAObjects2.length = 0;
gdjs.trianonCode.GDDIMITRIObjects1.length = 0;
gdjs.trianonCode.GDDIMITRIObjects2.length = 0;
gdjs.trianonCode.GDluluObjects1.length = 0;
gdjs.trianonCode.GDluluObjects2.length = 0;
gdjs.trianonCode.GDioanaObjects1.length = 0;
gdjs.trianonCode.GDioanaObjects2.length = 0;
gdjs.trianonCode.GDpaolaObjects1.length = 0;
gdjs.trianonCode.GDpaolaObjects2.length = 0;
gdjs.trianonCode.GDservice_9595personne_9595mairieObjects1.length = 0;
gdjs.trianonCode.GDservice_9595personne_9595mairieObjects2.length = 0;
gdjs.trianonCode.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.trianonCode.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.trianonCode.GDbouillonObjects1.length = 0;
gdjs.trianonCode.GDbouillonObjects2.length = 0;
gdjs.trianonCode.GDluna_9595rossaObjects1.length = 0;
gdjs.trianonCode.GDluna_9595rossaObjects2.length = 0;
gdjs.trianonCode.GDtrianonObjects1.length = 0;
gdjs.trianonCode.GDtrianonObjects2.length = 0;
gdjs.trianonCode.GDmetroObjects1.length = 0;
gdjs.trianonCode.GDmetroObjects2.length = 0;
gdjs.trianonCode.GDmokaObjects1.length = 0;
gdjs.trianonCode.GDmokaObjects2.length = 0;
gdjs.trianonCode.GDbillieObjects1.length = 0;
gdjs.trianonCode.GDbillieObjects2.length = 0;

gdjs.trianonCode.eventsList0(runtimeScene);
gdjs.trianonCode.GDanother_9595levelObjects1.length = 0;
gdjs.trianonCode.GDanother_9595levelObjects2.length = 0;
gdjs.trianonCode.GDballonObjects1.length = 0;
gdjs.trianonCode.GDballonObjects2.length = 0;
gdjs.trianonCode.GDfondu_9595noirObjects1.length = 0;
gdjs.trianonCode.GDfondu_9595noirObjects2.length = 0;
gdjs.trianonCode.GDcloud1Objects1.length = 0;
gdjs.trianonCode.GDcloud1Objects2.length = 0;
gdjs.trianonCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.trianonCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.trianonCode.GDfabienObjects1.length = 0;
gdjs.trianonCode.GDfabienObjects2.length = 0;
gdjs.trianonCode.GDclaudeObjects1.length = 0;
gdjs.trianonCode.GDclaudeObjects2.length = 0;
gdjs.trianonCode.GDbackgroundObjects1.length = 0;
gdjs.trianonCode.GDbackgroundObjects2.length = 0;
gdjs.trianonCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.trianonCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.trianonCode.GDmouetteObjects1.length = 0;
gdjs.trianonCode.GDmouetteObjects2.length = 0;
gdjs.trianonCode.GDwipObjects1.length = 0;
gdjs.trianonCode.GDwipObjects2.length = 0;
gdjs.trianonCode.GDRoroObjects1.length = 0;
gdjs.trianonCode.GDRoroObjects2.length = 0;
gdjs.trianonCode.GDPOLINAObjects1.length = 0;
gdjs.trianonCode.GDPOLINAObjects2.length = 0;
gdjs.trianonCode.GDDIMITRIObjects1.length = 0;
gdjs.trianonCode.GDDIMITRIObjects2.length = 0;
gdjs.trianonCode.GDluluObjects1.length = 0;
gdjs.trianonCode.GDluluObjects2.length = 0;
gdjs.trianonCode.GDioanaObjects1.length = 0;
gdjs.trianonCode.GDioanaObjects2.length = 0;
gdjs.trianonCode.GDpaolaObjects1.length = 0;
gdjs.trianonCode.GDpaolaObjects2.length = 0;
gdjs.trianonCode.GDservice_9595personne_9595mairieObjects1.length = 0;
gdjs.trianonCode.GDservice_9595personne_9595mairieObjects2.length = 0;
gdjs.trianonCode.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.trianonCode.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.trianonCode.GDbouillonObjects1.length = 0;
gdjs.trianonCode.GDbouillonObjects2.length = 0;
gdjs.trianonCode.GDluna_9595rossaObjects1.length = 0;
gdjs.trianonCode.GDluna_9595rossaObjects2.length = 0;
gdjs.trianonCode.GDtrianonObjects1.length = 0;
gdjs.trianonCode.GDtrianonObjects2.length = 0;
gdjs.trianonCode.GDmetroObjects1.length = 0;
gdjs.trianonCode.GDmetroObjects2.length = 0;
gdjs.trianonCode.GDmokaObjects1.length = 0;
gdjs.trianonCode.GDmokaObjects2.length = 0;
gdjs.trianonCode.GDbillieObjects1.length = 0;
gdjs.trianonCode.GDbillieObjects2.length = 0;


return;

}

gdjs['trianonCode'] = gdjs.trianonCode;
