gdjs.le_32metroCode = {};
gdjs.le_32metroCode.localVariables = [];
gdjs.le_32metroCode.idToCallbackMap = new Map();
gdjs.le_32metroCode.GDanother_9595levelObjects1= [];
gdjs.le_32metroCode.GDanother_9595levelObjects2= [];
gdjs.le_32metroCode.GDballonObjects1= [];
gdjs.le_32metroCode.GDballonObjects2= [];
gdjs.le_32metroCode.GDfondu_9595noirObjects1= [];
gdjs.le_32metroCode.GDfondu_9595noirObjects2= [];
gdjs.le_32metroCode.GDcloud1Objects1= [];
gdjs.le_32metroCode.GDcloud1Objects2= [];
gdjs.le_32metroCode.GDDebugTextWeatherObjects1= [];
gdjs.le_32metroCode.GDDebugTextWeatherObjects2= [];
gdjs.le_32metroCode.GDfabienObjects1= [];
gdjs.le_32metroCode.GDfabienObjects2= [];
gdjs.le_32metroCode.GDclaudeObjects1= [];
gdjs.le_32metroCode.GDclaudeObjects2= [];
gdjs.le_32metroCode.GDbackgroundObjects1= [];
gdjs.le_32metroCode.GDbackgroundObjects2= [];
gdjs.le_32metroCode.GDballoon_9595no_9595levelObjects1= [];
gdjs.le_32metroCode.GDballoon_9595no_9595levelObjects2= [];
gdjs.le_32metroCode.GDmouetteObjects1= [];
gdjs.le_32metroCode.GDmouetteObjects2= [];
gdjs.le_32metroCode.GDwipObjects1= [];
gdjs.le_32metroCode.GDwipObjects2= [];
gdjs.le_32metroCode.GDRoroObjects1= [];
gdjs.le_32metroCode.GDRoroObjects2= [];
gdjs.le_32metroCode.GDPOLINAObjects1= [];
gdjs.le_32metroCode.GDPOLINAObjects2= [];
gdjs.le_32metroCode.GDDIMITRIObjects1= [];
gdjs.le_32metroCode.GDDIMITRIObjects2= [];
gdjs.le_32metroCode.GDluluObjects1= [];
gdjs.le_32metroCode.GDluluObjects2= [];
gdjs.le_32metroCode.GDioanaObjects1= [];
gdjs.le_32metroCode.GDioanaObjects2= [];
gdjs.le_32metroCode.GDpaolaObjects1= [];
gdjs.le_32metroCode.GDpaolaObjects2= [];
gdjs.le_32metroCode.GDservice_9595personne_9595mairieObjects1= [];
gdjs.le_32metroCode.GDservice_9595personne_9595mairieObjects2= [];
gdjs.le_32metroCode.GDtrain_9595de_9595vieObjects1= [];
gdjs.le_32metroCode.GDtrain_9595de_9595vieObjects2= [];
gdjs.le_32metroCode.GDbouillonObjects1= [];
gdjs.le_32metroCode.GDbouillonObjects2= [];
gdjs.le_32metroCode.GDluna_9595rossaObjects1= [];
gdjs.le_32metroCode.GDluna_9595rossaObjects2= [];
gdjs.le_32metroCode.GDtrianonObjects1= [];
gdjs.le_32metroCode.GDtrianonObjects2= [];
gdjs.le_32metroCode.GDmetroObjects1= [];
gdjs.le_32metroCode.GDmetroObjects2= [];
gdjs.le_32metroCode.GDmokaObjects1= [];
gdjs.le_32metroCode.GDmokaObjects2= [];
gdjs.le_32metroCode.GDbillieObjects1= [];
gdjs.le_32metroCode.GDbillieObjects2= [];
gdjs.le_32metroCode.GDLiselaureObjects1= [];
gdjs.le_32metroCode.GDLiselaureObjects2= [];
gdjs.le_32metroCode.GDflofloObjects1= [];
gdjs.le_32metroCode.GDflofloObjects2= [];
gdjs.le_32metroCode.GDJCObjects1= [];
gdjs.le_32metroCode.GDJCObjects2= [];
gdjs.le_32metroCode.GDHectorObjects1= [];
gdjs.le_32metroCode.GDHectorObjects2= [];
gdjs.le_32metroCode.GDFleuryObjects1= [];
gdjs.le_32metroCode.GDFleuryObjects2= [];
gdjs.le_32metroCode.GDyayaObjects1= [];
gdjs.le_32metroCode.GDyayaObjects2= [];
gdjs.le_32metroCode.GDsebObjects1= [];
gdjs.le_32metroCode.GDsebObjects2= [];
gdjs.le_32metroCode.GDaureliaObjects1= [];
gdjs.le_32metroCode.GDaureliaObjects2= [];
gdjs.le_32metroCode.GDespoir_9595de_9595louObjects1= [];
gdjs.le_32metroCode.GDespoir_9595de_9595louObjects2= [];
gdjs.le_32metroCode.GDelctricienObjects1= [];
gdjs.le_32metroCode.GDelctricienObjects2= [];
gdjs.le_32metroCode.GDchachaObjects1= [];
gdjs.le_32metroCode.GDchachaObjects2= [];
gdjs.le_32metroCode.GDtomoObjects1= [];
gdjs.le_32metroCode.GDtomoObjects2= [];
gdjs.le_32metroCode.GDMrRObeObjects1= [];
gdjs.le_32metroCode.GDMrRObeObjects2= [];


gdjs.le_32metroCode.mapOfGDgdjs_9546le_959532metroCode_9546GDanother_95959595levelObjects1Objects = Hashtable.newFrom({"another_level": gdjs.le_32metroCode.GDanother_9595levelObjects1});
gdjs.le_32metroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.8, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("another_level"), gdjs.le_32metroCode.GDanother_9595levelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.le_32metroCode.mapOfGDgdjs_9546le_959532metroCode_9546GDanother_95959595levelObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "les 3 C", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.le_32metroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.le_32metroCode.GDanother_9595levelObjects1.length = 0;
gdjs.le_32metroCode.GDanother_9595levelObjects2.length = 0;
gdjs.le_32metroCode.GDballonObjects1.length = 0;
gdjs.le_32metroCode.GDballonObjects2.length = 0;
gdjs.le_32metroCode.GDfondu_9595noirObjects1.length = 0;
gdjs.le_32metroCode.GDfondu_9595noirObjects2.length = 0;
gdjs.le_32metroCode.GDcloud1Objects1.length = 0;
gdjs.le_32metroCode.GDcloud1Objects2.length = 0;
gdjs.le_32metroCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.le_32metroCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.le_32metroCode.GDfabienObjects1.length = 0;
gdjs.le_32metroCode.GDfabienObjects2.length = 0;
gdjs.le_32metroCode.GDclaudeObjects1.length = 0;
gdjs.le_32metroCode.GDclaudeObjects2.length = 0;
gdjs.le_32metroCode.GDbackgroundObjects1.length = 0;
gdjs.le_32metroCode.GDbackgroundObjects2.length = 0;
gdjs.le_32metroCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.le_32metroCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.le_32metroCode.GDmouetteObjects1.length = 0;
gdjs.le_32metroCode.GDmouetteObjects2.length = 0;
gdjs.le_32metroCode.GDwipObjects1.length = 0;
gdjs.le_32metroCode.GDwipObjects2.length = 0;
gdjs.le_32metroCode.GDRoroObjects1.length = 0;
gdjs.le_32metroCode.GDRoroObjects2.length = 0;
gdjs.le_32metroCode.GDPOLINAObjects1.length = 0;
gdjs.le_32metroCode.GDPOLINAObjects2.length = 0;
gdjs.le_32metroCode.GDDIMITRIObjects1.length = 0;
gdjs.le_32metroCode.GDDIMITRIObjects2.length = 0;
gdjs.le_32metroCode.GDluluObjects1.length = 0;
gdjs.le_32metroCode.GDluluObjects2.length = 0;
gdjs.le_32metroCode.GDioanaObjects1.length = 0;
gdjs.le_32metroCode.GDioanaObjects2.length = 0;
gdjs.le_32metroCode.GDpaolaObjects1.length = 0;
gdjs.le_32metroCode.GDpaolaObjects2.length = 0;
gdjs.le_32metroCode.GDservice_9595personne_9595mairieObjects1.length = 0;
gdjs.le_32metroCode.GDservice_9595personne_9595mairieObjects2.length = 0;
gdjs.le_32metroCode.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.le_32metroCode.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.le_32metroCode.GDbouillonObjects1.length = 0;
gdjs.le_32metroCode.GDbouillonObjects2.length = 0;
gdjs.le_32metroCode.GDluna_9595rossaObjects1.length = 0;
gdjs.le_32metroCode.GDluna_9595rossaObjects2.length = 0;
gdjs.le_32metroCode.GDtrianonObjects1.length = 0;
gdjs.le_32metroCode.GDtrianonObjects2.length = 0;
gdjs.le_32metroCode.GDmetroObjects1.length = 0;
gdjs.le_32metroCode.GDmetroObjects2.length = 0;
gdjs.le_32metroCode.GDmokaObjects1.length = 0;
gdjs.le_32metroCode.GDmokaObjects2.length = 0;
gdjs.le_32metroCode.GDbillieObjects1.length = 0;
gdjs.le_32metroCode.GDbillieObjects2.length = 0;
gdjs.le_32metroCode.GDLiselaureObjects1.length = 0;
gdjs.le_32metroCode.GDLiselaureObjects2.length = 0;
gdjs.le_32metroCode.GDflofloObjects1.length = 0;
gdjs.le_32metroCode.GDflofloObjects2.length = 0;
gdjs.le_32metroCode.GDJCObjects1.length = 0;
gdjs.le_32metroCode.GDJCObjects2.length = 0;
gdjs.le_32metroCode.GDHectorObjects1.length = 0;
gdjs.le_32metroCode.GDHectorObjects2.length = 0;
gdjs.le_32metroCode.GDFleuryObjects1.length = 0;
gdjs.le_32metroCode.GDFleuryObjects2.length = 0;
gdjs.le_32metroCode.GDyayaObjects1.length = 0;
gdjs.le_32metroCode.GDyayaObjects2.length = 0;
gdjs.le_32metroCode.GDsebObjects1.length = 0;
gdjs.le_32metroCode.GDsebObjects2.length = 0;
gdjs.le_32metroCode.GDaureliaObjects1.length = 0;
gdjs.le_32metroCode.GDaureliaObjects2.length = 0;
gdjs.le_32metroCode.GDespoir_9595de_9595louObjects1.length = 0;
gdjs.le_32metroCode.GDespoir_9595de_9595louObjects2.length = 0;
gdjs.le_32metroCode.GDelctricienObjects1.length = 0;
gdjs.le_32metroCode.GDelctricienObjects2.length = 0;
gdjs.le_32metroCode.GDchachaObjects1.length = 0;
gdjs.le_32metroCode.GDchachaObjects2.length = 0;
gdjs.le_32metroCode.GDtomoObjects1.length = 0;
gdjs.le_32metroCode.GDtomoObjects2.length = 0;
gdjs.le_32metroCode.GDMrRObeObjects1.length = 0;
gdjs.le_32metroCode.GDMrRObeObjects2.length = 0;

gdjs.le_32metroCode.eventsList0(runtimeScene);
gdjs.le_32metroCode.GDanother_9595levelObjects1.length = 0;
gdjs.le_32metroCode.GDanother_9595levelObjects2.length = 0;
gdjs.le_32metroCode.GDballonObjects1.length = 0;
gdjs.le_32metroCode.GDballonObjects2.length = 0;
gdjs.le_32metroCode.GDfondu_9595noirObjects1.length = 0;
gdjs.le_32metroCode.GDfondu_9595noirObjects2.length = 0;
gdjs.le_32metroCode.GDcloud1Objects1.length = 0;
gdjs.le_32metroCode.GDcloud1Objects2.length = 0;
gdjs.le_32metroCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.le_32metroCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.le_32metroCode.GDfabienObjects1.length = 0;
gdjs.le_32metroCode.GDfabienObjects2.length = 0;
gdjs.le_32metroCode.GDclaudeObjects1.length = 0;
gdjs.le_32metroCode.GDclaudeObjects2.length = 0;
gdjs.le_32metroCode.GDbackgroundObjects1.length = 0;
gdjs.le_32metroCode.GDbackgroundObjects2.length = 0;
gdjs.le_32metroCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.le_32metroCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.le_32metroCode.GDmouetteObjects1.length = 0;
gdjs.le_32metroCode.GDmouetteObjects2.length = 0;
gdjs.le_32metroCode.GDwipObjects1.length = 0;
gdjs.le_32metroCode.GDwipObjects2.length = 0;
gdjs.le_32metroCode.GDRoroObjects1.length = 0;
gdjs.le_32metroCode.GDRoroObjects2.length = 0;
gdjs.le_32metroCode.GDPOLINAObjects1.length = 0;
gdjs.le_32metroCode.GDPOLINAObjects2.length = 0;
gdjs.le_32metroCode.GDDIMITRIObjects1.length = 0;
gdjs.le_32metroCode.GDDIMITRIObjects2.length = 0;
gdjs.le_32metroCode.GDluluObjects1.length = 0;
gdjs.le_32metroCode.GDluluObjects2.length = 0;
gdjs.le_32metroCode.GDioanaObjects1.length = 0;
gdjs.le_32metroCode.GDioanaObjects2.length = 0;
gdjs.le_32metroCode.GDpaolaObjects1.length = 0;
gdjs.le_32metroCode.GDpaolaObjects2.length = 0;
gdjs.le_32metroCode.GDservice_9595personne_9595mairieObjects1.length = 0;
gdjs.le_32metroCode.GDservice_9595personne_9595mairieObjects2.length = 0;
gdjs.le_32metroCode.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.le_32metroCode.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.le_32metroCode.GDbouillonObjects1.length = 0;
gdjs.le_32metroCode.GDbouillonObjects2.length = 0;
gdjs.le_32metroCode.GDluna_9595rossaObjects1.length = 0;
gdjs.le_32metroCode.GDluna_9595rossaObjects2.length = 0;
gdjs.le_32metroCode.GDtrianonObjects1.length = 0;
gdjs.le_32metroCode.GDtrianonObjects2.length = 0;
gdjs.le_32metroCode.GDmetroObjects1.length = 0;
gdjs.le_32metroCode.GDmetroObjects2.length = 0;
gdjs.le_32metroCode.GDmokaObjects1.length = 0;
gdjs.le_32metroCode.GDmokaObjects2.length = 0;
gdjs.le_32metroCode.GDbillieObjects1.length = 0;
gdjs.le_32metroCode.GDbillieObjects2.length = 0;
gdjs.le_32metroCode.GDLiselaureObjects1.length = 0;
gdjs.le_32metroCode.GDLiselaureObjects2.length = 0;
gdjs.le_32metroCode.GDflofloObjects1.length = 0;
gdjs.le_32metroCode.GDflofloObjects2.length = 0;
gdjs.le_32metroCode.GDJCObjects1.length = 0;
gdjs.le_32metroCode.GDJCObjects2.length = 0;
gdjs.le_32metroCode.GDHectorObjects1.length = 0;
gdjs.le_32metroCode.GDHectorObjects2.length = 0;
gdjs.le_32metroCode.GDFleuryObjects1.length = 0;
gdjs.le_32metroCode.GDFleuryObjects2.length = 0;
gdjs.le_32metroCode.GDyayaObjects1.length = 0;
gdjs.le_32metroCode.GDyayaObjects2.length = 0;
gdjs.le_32metroCode.GDsebObjects1.length = 0;
gdjs.le_32metroCode.GDsebObjects2.length = 0;
gdjs.le_32metroCode.GDaureliaObjects1.length = 0;
gdjs.le_32metroCode.GDaureliaObjects2.length = 0;
gdjs.le_32metroCode.GDespoir_9595de_9595louObjects1.length = 0;
gdjs.le_32metroCode.GDespoir_9595de_9595louObjects2.length = 0;
gdjs.le_32metroCode.GDelctricienObjects1.length = 0;
gdjs.le_32metroCode.GDelctricienObjects2.length = 0;
gdjs.le_32metroCode.GDchachaObjects1.length = 0;
gdjs.le_32metroCode.GDchachaObjects2.length = 0;
gdjs.le_32metroCode.GDtomoObjects1.length = 0;
gdjs.le_32metroCode.GDtomoObjects2.length = 0;
gdjs.le_32metroCode.GDMrRObeObjects1.length = 0;
gdjs.le_32metroCode.GDMrRObeObjects2.length = 0;


return;

}

gdjs['le_32metroCode'] = gdjs.le_32metroCode;
