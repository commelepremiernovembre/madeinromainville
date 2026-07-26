gdjs.les_323_32CCode = {};
gdjs.les_323_32CCode.localVariables = [];
gdjs.les_323_32CCode.idToCallbackMap = new Map();
gdjs.les_323_32CCode.GDLes_95953_9595CObjects1= [];
gdjs.les_323_32CCode.GDLes_95953_9595CObjects2= [];
gdjs.les_323_32CCode.GDpassage_9595levelObjects1= [];
gdjs.les_323_32CCode.GDpassage_9595levelObjects2= [];
gdjs.les_323_32CCode.GDballonObjects1= [];
gdjs.les_323_32CCode.GDballonObjects2= [];
gdjs.les_323_32CCode.GDfondu_9595noirObjects1= [];
gdjs.les_323_32CCode.GDfondu_9595noirObjects2= [];
gdjs.les_323_32CCode.GDcloud1Objects1= [];
gdjs.les_323_32CCode.GDcloud1Objects2= [];
gdjs.les_323_32CCode.GDDebugTextWeatherObjects1= [];
gdjs.les_323_32CCode.GDDebugTextWeatherObjects2= [];
gdjs.les_323_32CCode.GDfabienObjects1= [];
gdjs.les_323_32CCode.GDfabienObjects2= [];
gdjs.les_323_32CCode.GDclaudeObjects1= [];
gdjs.les_323_32CCode.GDclaudeObjects2= [];
gdjs.les_323_32CCode.GDbackgroundObjects1= [];
gdjs.les_323_32CCode.GDbackgroundObjects2= [];
gdjs.les_323_32CCode.GDballoon_9595no_9595levelObjects1= [];
gdjs.les_323_32CCode.GDballoon_9595no_9595levelObjects2= [];
gdjs.les_323_32CCode.GDmouetteObjects1= [];
gdjs.les_323_32CCode.GDmouetteObjects2= [];
gdjs.les_323_32CCode.GDwipObjects1= [];
gdjs.les_323_32CCode.GDwipObjects2= [];
gdjs.les_323_32CCode.GDRoroObjects1= [];
gdjs.les_323_32CCode.GDRoroObjects2= [];
gdjs.les_323_32CCode.GDPOLINAObjects1= [];
gdjs.les_323_32CCode.GDPOLINAObjects2= [];
gdjs.les_323_32CCode.GDDIMITRIObjects1= [];
gdjs.les_323_32CCode.GDDIMITRIObjects2= [];
gdjs.les_323_32CCode.GDluluObjects1= [];
gdjs.les_323_32CCode.GDluluObjects2= [];
gdjs.les_323_32CCode.GDioanaObjects1= [];
gdjs.les_323_32CCode.GDioanaObjects2= [];
gdjs.les_323_32CCode.GDpaolaObjects1= [];
gdjs.les_323_32CCode.GDpaolaObjects2= [];
gdjs.les_323_32CCode.GDservice_9595personne_9595mairieObjects1= [];
gdjs.les_323_32CCode.GDservice_9595personne_9595mairieObjects2= [];
gdjs.les_323_32CCode.GDtrain_9595de_9595vieObjects1= [];
gdjs.les_323_32CCode.GDtrain_9595de_9595vieObjects2= [];
gdjs.les_323_32CCode.GDbouillonObjects1= [];
gdjs.les_323_32CCode.GDbouillonObjects2= [];
gdjs.les_323_32CCode.GDluna_9595rossaObjects1= [];
gdjs.les_323_32CCode.GDluna_9595rossaObjects2= [];
gdjs.les_323_32CCode.GDtrianonObjects1= [];
gdjs.les_323_32CCode.GDtrianonObjects2= [];
gdjs.les_323_32CCode.GDmetroObjects1= [];
gdjs.les_323_32CCode.GDmetroObjects2= [];
gdjs.les_323_32CCode.GDmokaObjects1= [];
gdjs.les_323_32CCode.GDmokaObjects2= [];
gdjs.les_323_32CCode.GDbillieObjects1= [];
gdjs.les_323_32CCode.GDbillieObjects2= [];
gdjs.les_323_32CCode.GDLiselaureObjects1= [];
gdjs.les_323_32CCode.GDLiselaureObjects2= [];
gdjs.les_323_32CCode.GDflofloObjects1= [];
gdjs.les_323_32CCode.GDflofloObjects2= [];
gdjs.les_323_32CCode.GDJCObjects1= [];
gdjs.les_323_32CCode.GDJCObjects2= [];
gdjs.les_323_32CCode.GDHectorObjects1= [];
gdjs.les_323_32CCode.GDHectorObjects2= [];
gdjs.les_323_32CCode.GDFleuryObjects1= [];
gdjs.les_323_32CCode.GDFleuryObjects2= [];
gdjs.les_323_32CCode.GDyayaObjects1= [];
gdjs.les_323_32CCode.GDyayaObjects2= [];
gdjs.les_323_32CCode.GDsebObjects1= [];
gdjs.les_323_32CCode.GDsebObjects2= [];
gdjs.les_323_32CCode.GDaureliaObjects1= [];
gdjs.les_323_32CCode.GDaureliaObjects2= [];
gdjs.les_323_32CCode.GDespoir_9595de_9595louObjects1= [];
gdjs.les_323_32CCode.GDespoir_9595de_9595louObjects2= [];
gdjs.les_323_32CCode.GDelctricienObjects1= [];
gdjs.les_323_32CCode.GDelctricienObjects2= [];
gdjs.les_323_32CCode.GDchachaObjects1= [];
gdjs.les_323_32CCode.GDchachaObjects2= [];
gdjs.les_323_32CCode.GDtomoObjects1= [];
gdjs.les_323_32CCode.GDtomoObjects2= [];


gdjs.les_323_32CCode.mapOfGDgdjs_9546les_9595323_959532CCode_9546GDpassage_95959595levelObjects1Objects = Hashtable.newFrom({"passage_level": gdjs.les_323_32CCode.GDpassage_9595levelObjects1});
gdjs.les_323_32CCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("passage_level"), gdjs.les_323_32CCode.GDpassage_9595levelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.les_323_32CCode.mapOfGDgdjs_9546les_9595323_959532CCode_9546GDpassage_95959595levelObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.les_323_32CCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.les_323_32CCode.GDLes_95953_9595CObjects1.length = 0;
gdjs.les_323_32CCode.GDLes_95953_9595CObjects2.length = 0;
gdjs.les_323_32CCode.GDpassage_9595levelObjects1.length = 0;
gdjs.les_323_32CCode.GDpassage_9595levelObjects2.length = 0;
gdjs.les_323_32CCode.GDballonObjects1.length = 0;
gdjs.les_323_32CCode.GDballonObjects2.length = 0;
gdjs.les_323_32CCode.GDfondu_9595noirObjects1.length = 0;
gdjs.les_323_32CCode.GDfondu_9595noirObjects2.length = 0;
gdjs.les_323_32CCode.GDcloud1Objects1.length = 0;
gdjs.les_323_32CCode.GDcloud1Objects2.length = 0;
gdjs.les_323_32CCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.les_323_32CCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.les_323_32CCode.GDfabienObjects1.length = 0;
gdjs.les_323_32CCode.GDfabienObjects2.length = 0;
gdjs.les_323_32CCode.GDclaudeObjects1.length = 0;
gdjs.les_323_32CCode.GDclaudeObjects2.length = 0;
gdjs.les_323_32CCode.GDbackgroundObjects1.length = 0;
gdjs.les_323_32CCode.GDbackgroundObjects2.length = 0;
gdjs.les_323_32CCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.les_323_32CCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.les_323_32CCode.GDmouetteObjects1.length = 0;
gdjs.les_323_32CCode.GDmouetteObjects2.length = 0;
gdjs.les_323_32CCode.GDwipObjects1.length = 0;
gdjs.les_323_32CCode.GDwipObjects2.length = 0;
gdjs.les_323_32CCode.GDRoroObjects1.length = 0;
gdjs.les_323_32CCode.GDRoroObjects2.length = 0;
gdjs.les_323_32CCode.GDPOLINAObjects1.length = 0;
gdjs.les_323_32CCode.GDPOLINAObjects2.length = 0;
gdjs.les_323_32CCode.GDDIMITRIObjects1.length = 0;
gdjs.les_323_32CCode.GDDIMITRIObjects2.length = 0;
gdjs.les_323_32CCode.GDluluObjects1.length = 0;
gdjs.les_323_32CCode.GDluluObjects2.length = 0;
gdjs.les_323_32CCode.GDioanaObjects1.length = 0;
gdjs.les_323_32CCode.GDioanaObjects2.length = 0;
gdjs.les_323_32CCode.GDpaolaObjects1.length = 0;
gdjs.les_323_32CCode.GDpaolaObjects2.length = 0;
gdjs.les_323_32CCode.GDservice_9595personne_9595mairieObjects1.length = 0;
gdjs.les_323_32CCode.GDservice_9595personne_9595mairieObjects2.length = 0;
gdjs.les_323_32CCode.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.les_323_32CCode.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.les_323_32CCode.GDbouillonObjects1.length = 0;
gdjs.les_323_32CCode.GDbouillonObjects2.length = 0;
gdjs.les_323_32CCode.GDluna_9595rossaObjects1.length = 0;
gdjs.les_323_32CCode.GDluna_9595rossaObjects2.length = 0;
gdjs.les_323_32CCode.GDtrianonObjects1.length = 0;
gdjs.les_323_32CCode.GDtrianonObjects2.length = 0;
gdjs.les_323_32CCode.GDmetroObjects1.length = 0;
gdjs.les_323_32CCode.GDmetroObjects2.length = 0;
gdjs.les_323_32CCode.GDmokaObjects1.length = 0;
gdjs.les_323_32CCode.GDmokaObjects2.length = 0;
gdjs.les_323_32CCode.GDbillieObjects1.length = 0;
gdjs.les_323_32CCode.GDbillieObjects2.length = 0;
gdjs.les_323_32CCode.GDLiselaureObjects1.length = 0;
gdjs.les_323_32CCode.GDLiselaureObjects2.length = 0;
gdjs.les_323_32CCode.GDflofloObjects1.length = 0;
gdjs.les_323_32CCode.GDflofloObjects2.length = 0;
gdjs.les_323_32CCode.GDJCObjects1.length = 0;
gdjs.les_323_32CCode.GDJCObjects2.length = 0;
gdjs.les_323_32CCode.GDHectorObjects1.length = 0;
gdjs.les_323_32CCode.GDHectorObjects2.length = 0;
gdjs.les_323_32CCode.GDFleuryObjects1.length = 0;
gdjs.les_323_32CCode.GDFleuryObjects2.length = 0;
gdjs.les_323_32CCode.GDyayaObjects1.length = 0;
gdjs.les_323_32CCode.GDyayaObjects2.length = 0;
gdjs.les_323_32CCode.GDsebObjects1.length = 0;
gdjs.les_323_32CCode.GDsebObjects2.length = 0;
gdjs.les_323_32CCode.GDaureliaObjects1.length = 0;
gdjs.les_323_32CCode.GDaureliaObjects2.length = 0;
gdjs.les_323_32CCode.GDespoir_9595de_9595louObjects1.length = 0;
gdjs.les_323_32CCode.GDespoir_9595de_9595louObjects2.length = 0;
gdjs.les_323_32CCode.GDelctricienObjects1.length = 0;
gdjs.les_323_32CCode.GDelctricienObjects2.length = 0;
gdjs.les_323_32CCode.GDchachaObjects1.length = 0;
gdjs.les_323_32CCode.GDchachaObjects2.length = 0;
gdjs.les_323_32CCode.GDtomoObjects1.length = 0;
gdjs.les_323_32CCode.GDtomoObjects2.length = 0;

gdjs.les_323_32CCode.eventsList0(runtimeScene);
gdjs.les_323_32CCode.GDLes_95953_9595CObjects1.length = 0;
gdjs.les_323_32CCode.GDLes_95953_9595CObjects2.length = 0;
gdjs.les_323_32CCode.GDpassage_9595levelObjects1.length = 0;
gdjs.les_323_32CCode.GDpassage_9595levelObjects2.length = 0;
gdjs.les_323_32CCode.GDballonObjects1.length = 0;
gdjs.les_323_32CCode.GDballonObjects2.length = 0;
gdjs.les_323_32CCode.GDfondu_9595noirObjects1.length = 0;
gdjs.les_323_32CCode.GDfondu_9595noirObjects2.length = 0;
gdjs.les_323_32CCode.GDcloud1Objects1.length = 0;
gdjs.les_323_32CCode.GDcloud1Objects2.length = 0;
gdjs.les_323_32CCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.les_323_32CCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.les_323_32CCode.GDfabienObjects1.length = 0;
gdjs.les_323_32CCode.GDfabienObjects2.length = 0;
gdjs.les_323_32CCode.GDclaudeObjects1.length = 0;
gdjs.les_323_32CCode.GDclaudeObjects2.length = 0;
gdjs.les_323_32CCode.GDbackgroundObjects1.length = 0;
gdjs.les_323_32CCode.GDbackgroundObjects2.length = 0;
gdjs.les_323_32CCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.les_323_32CCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.les_323_32CCode.GDmouetteObjects1.length = 0;
gdjs.les_323_32CCode.GDmouetteObjects2.length = 0;
gdjs.les_323_32CCode.GDwipObjects1.length = 0;
gdjs.les_323_32CCode.GDwipObjects2.length = 0;
gdjs.les_323_32CCode.GDRoroObjects1.length = 0;
gdjs.les_323_32CCode.GDRoroObjects2.length = 0;
gdjs.les_323_32CCode.GDPOLINAObjects1.length = 0;
gdjs.les_323_32CCode.GDPOLINAObjects2.length = 0;
gdjs.les_323_32CCode.GDDIMITRIObjects1.length = 0;
gdjs.les_323_32CCode.GDDIMITRIObjects2.length = 0;
gdjs.les_323_32CCode.GDluluObjects1.length = 0;
gdjs.les_323_32CCode.GDluluObjects2.length = 0;
gdjs.les_323_32CCode.GDioanaObjects1.length = 0;
gdjs.les_323_32CCode.GDioanaObjects2.length = 0;
gdjs.les_323_32CCode.GDpaolaObjects1.length = 0;
gdjs.les_323_32CCode.GDpaolaObjects2.length = 0;
gdjs.les_323_32CCode.GDservice_9595personne_9595mairieObjects1.length = 0;
gdjs.les_323_32CCode.GDservice_9595personne_9595mairieObjects2.length = 0;
gdjs.les_323_32CCode.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.les_323_32CCode.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.les_323_32CCode.GDbouillonObjects1.length = 0;
gdjs.les_323_32CCode.GDbouillonObjects2.length = 0;
gdjs.les_323_32CCode.GDluna_9595rossaObjects1.length = 0;
gdjs.les_323_32CCode.GDluna_9595rossaObjects2.length = 0;
gdjs.les_323_32CCode.GDtrianonObjects1.length = 0;
gdjs.les_323_32CCode.GDtrianonObjects2.length = 0;
gdjs.les_323_32CCode.GDmetroObjects1.length = 0;
gdjs.les_323_32CCode.GDmetroObjects2.length = 0;
gdjs.les_323_32CCode.GDmokaObjects1.length = 0;
gdjs.les_323_32CCode.GDmokaObjects2.length = 0;
gdjs.les_323_32CCode.GDbillieObjects1.length = 0;
gdjs.les_323_32CCode.GDbillieObjects2.length = 0;
gdjs.les_323_32CCode.GDLiselaureObjects1.length = 0;
gdjs.les_323_32CCode.GDLiselaureObjects2.length = 0;
gdjs.les_323_32CCode.GDflofloObjects1.length = 0;
gdjs.les_323_32CCode.GDflofloObjects2.length = 0;
gdjs.les_323_32CCode.GDJCObjects1.length = 0;
gdjs.les_323_32CCode.GDJCObjects2.length = 0;
gdjs.les_323_32CCode.GDHectorObjects1.length = 0;
gdjs.les_323_32CCode.GDHectorObjects2.length = 0;
gdjs.les_323_32CCode.GDFleuryObjects1.length = 0;
gdjs.les_323_32CCode.GDFleuryObjects2.length = 0;
gdjs.les_323_32CCode.GDyayaObjects1.length = 0;
gdjs.les_323_32CCode.GDyayaObjects2.length = 0;
gdjs.les_323_32CCode.GDsebObjects1.length = 0;
gdjs.les_323_32CCode.GDsebObjects2.length = 0;
gdjs.les_323_32CCode.GDaureliaObjects1.length = 0;
gdjs.les_323_32CCode.GDaureliaObjects2.length = 0;
gdjs.les_323_32CCode.GDespoir_9595de_9595louObjects1.length = 0;
gdjs.les_323_32CCode.GDespoir_9595de_9595louObjects2.length = 0;
gdjs.les_323_32CCode.GDelctricienObjects1.length = 0;
gdjs.les_323_32CCode.GDelctricienObjects2.length = 0;
gdjs.les_323_32CCode.GDchachaObjects1.length = 0;
gdjs.les_323_32CCode.GDchachaObjects2.length = 0;
gdjs.les_323_32CCode.GDtomoObjects1.length = 0;
gdjs.les_323_32CCode.GDtomoObjects2.length = 0;


return;

}

gdjs['les_323_32CCode'] = gdjs.les_323_32CCode;
