gdjs.BABCode = {};
gdjs.BABCode.localVariables = [];
gdjs.BABCode.idToCallbackMap = new Map();
gdjs.BABCode.GDBABObjects1= [];
gdjs.BABCode.GDBABObjects2= [];
gdjs.BABCode.GDautre_9595ecranObjects1= [];
gdjs.BABCode.GDautre_9595ecranObjects2= [];
gdjs.BABCode.GDballonObjects1= [];
gdjs.BABCode.GDballonObjects2= [];
gdjs.BABCode.GDfondu_9595noirObjects1= [];
gdjs.BABCode.GDfondu_9595noirObjects2= [];
gdjs.BABCode.GDcloud1Objects1= [];
gdjs.BABCode.GDcloud1Objects2= [];
gdjs.BABCode.GDDebugTextWeatherObjects1= [];
gdjs.BABCode.GDDebugTextWeatherObjects2= [];
gdjs.BABCode.GDfabienObjects1= [];
gdjs.BABCode.GDfabienObjects2= [];
gdjs.BABCode.GDclaudeObjects1= [];
gdjs.BABCode.GDclaudeObjects2= [];
gdjs.BABCode.GDbackgroundObjects1= [];
gdjs.BABCode.GDbackgroundObjects2= [];
gdjs.BABCode.GDballoon_9595no_9595levelObjects1= [];
gdjs.BABCode.GDballoon_9595no_9595levelObjects2= [];
gdjs.BABCode.GDmouetteObjects1= [];
gdjs.BABCode.GDmouetteObjects2= [];
gdjs.BABCode.GDwipObjects1= [];
gdjs.BABCode.GDwipObjects2= [];
gdjs.BABCode.GDRoroObjects1= [];
gdjs.BABCode.GDRoroObjects2= [];
gdjs.BABCode.GDPOLINAObjects1= [];
gdjs.BABCode.GDPOLINAObjects2= [];
gdjs.BABCode.GDDIMITRIObjects1= [];
gdjs.BABCode.GDDIMITRIObjects2= [];
gdjs.BABCode.GDluluObjects1= [];
gdjs.BABCode.GDluluObjects2= [];
gdjs.BABCode.GDioanaObjects1= [];
gdjs.BABCode.GDioanaObjects2= [];
gdjs.BABCode.GDpaolaObjects1= [];
gdjs.BABCode.GDpaolaObjects2= [];
gdjs.BABCode.GDservice_9595personne_9595mairieObjects1= [];
gdjs.BABCode.GDservice_9595personne_9595mairieObjects2= [];
gdjs.BABCode.GDtrain_9595de_9595vieObjects1= [];
gdjs.BABCode.GDtrain_9595de_9595vieObjects2= [];
gdjs.BABCode.GDbouillonObjects1= [];
gdjs.BABCode.GDbouillonObjects2= [];
gdjs.BABCode.GDluna_9595rossaObjects1= [];
gdjs.BABCode.GDluna_9595rossaObjects2= [];
gdjs.BABCode.GDtrianonObjects1= [];
gdjs.BABCode.GDtrianonObjects2= [];
gdjs.BABCode.GDmetroObjects1= [];
gdjs.BABCode.GDmetroObjects2= [];
gdjs.BABCode.GDmokaObjects1= [];
gdjs.BABCode.GDmokaObjects2= [];
gdjs.BABCode.GDbillieObjects1= [];
gdjs.BABCode.GDbillieObjects2= [];


gdjs.BABCode.mapOfGDgdjs_9546BABCode_9546GDautre_95959595ecranObjects1Objects = Hashtable.newFrom({"autre_ecran": gdjs.BABCode.GDautre_9595ecranObjects1});
gdjs.BABCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("autre_ecran"), gdjs.BABCode.GDautre_9595ecranObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BABCode.mapOfGDgdjs_9546BABCode_9546GDautre_95959595ecranObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level3 fabien", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.BABCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BABCode.GDBABObjects1.length = 0;
gdjs.BABCode.GDBABObjects2.length = 0;
gdjs.BABCode.GDautre_9595ecranObjects1.length = 0;
gdjs.BABCode.GDautre_9595ecranObjects2.length = 0;
gdjs.BABCode.GDballonObjects1.length = 0;
gdjs.BABCode.GDballonObjects2.length = 0;
gdjs.BABCode.GDfondu_9595noirObjects1.length = 0;
gdjs.BABCode.GDfondu_9595noirObjects2.length = 0;
gdjs.BABCode.GDcloud1Objects1.length = 0;
gdjs.BABCode.GDcloud1Objects2.length = 0;
gdjs.BABCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.BABCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.BABCode.GDfabienObjects1.length = 0;
gdjs.BABCode.GDfabienObjects2.length = 0;
gdjs.BABCode.GDclaudeObjects1.length = 0;
gdjs.BABCode.GDclaudeObjects2.length = 0;
gdjs.BABCode.GDbackgroundObjects1.length = 0;
gdjs.BABCode.GDbackgroundObjects2.length = 0;
gdjs.BABCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.BABCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.BABCode.GDmouetteObjects1.length = 0;
gdjs.BABCode.GDmouetteObjects2.length = 0;
gdjs.BABCode.GDwipObjects1.length = 0;
gdjs.BABCode.GDwipObjects2.length = 0;
gdjs.BABCode.GDRoroObjects1.length = 0;
gdjs.BABCode.GDRoroObjects2.length = 0;
gdjs.BABCode.GDPOLINAObjects1.length = 0;
gdjs.BABCode.GDPOLINAObjects2.length = 0;
gdjs.BABCode.GDDIMITRIObjects1.length = 0;
gdjs.BABCode.GDDIMITRIObjects2.length = 0;
gdjs.BABCode.GDluluObjects1.length = 0;
gdjs.BABCode.GDluluObjects2.length = 0;
gdjs.BABCode.GDioanaObjects1.length = 0;
gdjs.BABCode.GDioanaObjects2.length = 0;
gdjs.BABCode.GDpaolaObjects1.length = 0;
gdjs.BABCode.GDpaolaObjects2.length = 0;
gdjs.BABCode.GDservice_9595personne_9595mairieObjects1.length = 0;
gdjs.BABCode.GDservice_9595personne_9595mairieObjects2.length = 0;
gdjs.BABCode.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.BABCode.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.BABCode.GDbouillonObjects1.length = 0;
gdjs.BABCode.GDbouillonObjects2.length = 0;
gdjs.BABCode.GDluna_9595rossaObjects1.length = 0;
gdjs.BABCode.GDluna_9595rossaObjects2.length = 0;
gdjs.BABCode.GDtrianonObjects1.length = 0;
gdjs.BABCode.GDtrianonObjects2.length = 0;
gdjs.BABCode.GDmetroObjects1.length = 0;
gdjs.BABCode.GDmetroObjects2.length = 0;
gdjs.BABCode.GDmokaObjects1.length = 0;
gdjs.BABCode.GDmokaObjects2.length = 0;
gdjs.BABCode.GDbillieObjects1.length = 0;
gdjs.BABCode.GDbillieObjects2.length = 0;

gdjs.BABCode.eventsList0(runtimeScene);
gdjs.BABCode.GDBABObjects1.length = 0;
gdjs.BABCode.GDBABObjects2.length = 0;
gdjs.BABCode.GDautre_9595ecranObjects1.length = 0;
gdjs.BABCode.GDautre_9595ecranObjects2.length = 0;
gdjs.BABCode.GDballonObjects1.length = 0;
gdjs.BABCode.GDballonObjects2.length = 0;
gdjs.BABCode.GDfondu_9595noirObjects1.length = 0;
gdjs.BABCode.GDfondu_9595noirObjects2.length = 0;
gdjs.BABCode.GDcloud1Objects1.length = 0;
gdjs.BABCode.GDcloud1Objects2.length = 0;
gdjs.BABCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.BABCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.BABCode.GDfabienObjects1.length = 0;
gdjs.BABCode.GDfabienObjects2.length = 0;
gdjs.BABCode.GDclaudeObjects1.length = 0;
gdjs.BABCode.GDclaudeObjects2.length = 0;
gdjs.BABCode.GDbackgroundObjects1.length = 0;
gdjs.BABCode.GDbackgroundObjects2.length = 0;
gdjs.BABCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.BABCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.BABCode.GDmouetteObjects1.length = 0;
gdjs.BABCode.GDmouetteObjects2.length = 0;
gdjs.BABCode.GDwipObjects1.length = 0;
gdjs.BABCode.GDwipObjects2.length = 0;
gdjs.BABCode.GDRoroObjects1.length = 0;
gdjs.BABCode.GDRoroObjects2.length = 0;
gdjs.BABCode.GDPOLINAObjects1.length = 0;
gdjs.BABCode.GDPOLINAObjects2.length = 0;
gdjs.BABCode.GDDIMITRIObjects1.length = 0;
gdjs.BABCode.GDDIMITRIObjects2.length = 0;
gdjs.BABCode.GDluluObjects1.length = 0;
gdjs.BABCode.GDluluObjects2.length = 0;
gdjs.BABCode.GDioanaObjects1.length = 0;
gdjs.BABCode.GDioanaObjects2.length = 0;
gdjs.BABCode.GDpaolaObjects1.length = 0;
gdjs.BABCode.GDpaolaObjects2.length = 0;
gdjs.BABCode.GDservice_9595personne_9595mairieObjects1.length = 0;
gdjs.BABCode.GDservice_9595personne_9595mairieObjects2.length = 0;
gdjs.BABCode.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.BABCode.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.BABCode.GDbouillonObjects1.length = 0;
gdjs.BABCode.GDbouillonObjects2.length = 0;
gdjs.BABCode.GDluna_9595rossaObjects1.length = 0;
gdjs.BABCode.GDluna_9595rossaObjects2.length = 0;
gdjs.BABCode.GDtrianonObjects1.length = 0;
gdjs.BABCode.GDtrianonObjects2.length = 0;
gdjs.BABCode.GDmetroObjects1.length = 0;
gdjs.BABCode.GDmetroObjects2.length = 0;
gdjs.BABCode.GDmokaObjects1.length = 0;
gdjs.BABCode.GDmokaObjects2.length = 0;
gdjs.BABCode.GDbillieObjects1.length = 0;
gdjs.BABCode.GDbillieObjects2.length = 0;


return;

}

gdjs['BABCode'] = gdjs.BABCode;
