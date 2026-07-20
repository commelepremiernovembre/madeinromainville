gdjs.FimincoCode = {};
gdjs.FimincoCode.localVariables = [];
gdjs.FimincoCode.idToCallbackMap = new Map();
gdjs.FimincoCode.GDfimincoObjects1= [];
gdjs.FimincoCode.GDfimincoObjects2= [];
gdjs.FimincoCode.GDfimincoObjects3= [];
gdjs.FimincoCode.GDautre_9595ecranObjects1= [];
gdjs.FimincoCode.GDautre_9595ecranObjects2= [];
gdjs.FimincoCode.GDautre_9595ecranObjects3= [];
gdjs.FimincoCode.GDjean_9595charlesObjects1= [];
gdjs.FimincoCode.GDjean_9595charlesObjects2= [];
gdjs.FimincoCode.GDjean_9595charlesObjects3= [];
gdjs.FimincoCode.GDballonObjects1= [];
gdjs.FimincoCode.GDballonObjects2= [];
gdjs.FimincoCode.GDballonObjects3= [];
gdjs.FimincoCode.GDfondu_9595noirObjects1= [];
gdjs.FimincoCode.GDfondu_9595noirObjects2= [];
gdjs.FimincoCode.GDfondu_9595noirObjects3= [];
gdjs.FimincoCode.GDcloud1Objects1= [];
gdjs.FimincoCode.GDcloud1Objects2= [];
gdjs.FimincoCode.GDcloud1Objects3= [];
gdjs.FimincoCode.GDDebugTextWeatherObjects1= [];
gdjs.FimincoCode.GDDebugTextWeatherObjects2= [];
gdjs.FimincoCode.GDDebugTextWeatherObjects3= [];
gdjs.FimincoCode.GDfabienObjects1= [];
gdjs.FimincoCode.GDfabienObjects2= [];
gdjs.FimincoCode.GDfabienObjects3= [];
gdjs.FimincoCode.GDclaudeObjects1= [];
gdjs.FimincoCode.GDclaudeObjects2= [];
gdjs.FimincoCode.GDclaudeObjects3= [];
gdjs.FimincoCode.GDbackgroundObjects1= [];
gdjs.FimincoCode.GDbackgroundObjects2= [];
gdjs.FimincoCode.GDbackgroundObjects3= [];
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects1= [];
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects2= [];
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects3= [];
gdjs.FimincoCode.GDmouetteObjects1= [];
gdjs.FimincoCode.GDmouetteObjects2= [];
gdjs.FimincoCode.GDmouetteObjects3= [];
gdjs.FimincoCode.GDwipObjects1= [];
gdjs.FimincoCode.GDwipObjects2= [];
gdjs.FimincoCode.GDwipObjects3= [];
gdjs.FimincoCode.GDRoroObjects1= [];
gdjs.FimincoCode.GDRoroObjects2= [];
gdjs.FimincoCode.GDRoroObjects3= [];
gdjs.FimincoCode.GDPOLINAObjects1= [];
gdjs.FimincoCode.GDPOLINAObjects2= [];
gdjs.FimincoCode.GDPOLINAObjects3= [];
gdjs.FimincoCode.GDDIMITRIObjects1= [];
gdjs.FimincoCode.GDDIMITRIObjects2= [];
gdjs.FimincoCode.GDDIMITRIObjects3= [];
gdjs.FimincoCode.GDluluObjects1= [];
gdjs.FimincoCode.GDluluObjects2= [];
gdjs.FimincoCode.GDluluObjects3= [];
gdjs.FimincoCode.GDioanaObjects1= [];
gdjs.FimincoCode.GDioanaObjects2= [];
gdjs.FimincoCode.GDioanaObjects3= [];
gdjs.FimincoCode.GDpaolaObjects1= [];
gdjs.FimincoCode.GDpaolaObjects2= [];
gdjs.FimincoCode.GDpaolaObjects3= [];
gdjs.FimincoCode.GDservice_9595personne_9595mairieObjects1= [];
gdjs.FimincoCode.GDservice_9595personne_9595mairieObjects2= [];
gdjs.FimincoCode.GDservice_9595personne_9595mairieObjects3= [];
gdjs.FimincoCode.GDtrain_9595de_9595vieObjects1= [];
gdjs.FimincoCode.GDtrain_9595de_9595vieObjects2= [];
gdjs.FimincoCode.GDtrain_9595de_9595vieObjects3= [];
gdjs.FimincoCode.GDbouillonObjects1= [];
gdjs.FimincoCode.GDbouillonObjects2= [];
gdjs.FimincoCode.GDbouillonObjects3= [];
gdjs.FimincoCode.GDluna_9595rossaObjects1= [];
gdjs.FimincoCode.GDluna_9595rossaObjects2= [];
gdjs.FimincoCode.GDluna_9595rossaObjects3= [];
gdjs.FimincoCode.GDtrianonObjects1= [];
gdjs.FimincoCode.GDtrianonObjects2= [];
gdjs.FimincoCode.GDtrianonObjects3= [];
gdjs.FimincoCode.GDmetroObjects1= [];
gdjs.FimincoCode.GDmetroObjects2= [];
gdjs.FimincoCode.GDmetroObjects3= [];


gdjs.FimincoCode.mapOfGDgdjs_9546FimincoCode_9546GDautre_95959595ecranObjects1Objects = Hashtable.newFrom({"autre_ecran": gdjs.FimincoCode.GDautre_9595ecranObjects1});
gdjs.FimincoCode.mapOfGDgdjs_9546FimincoCode_9546GDRoroObjects2Objects = Hashtable.newFrom({"Roro": gdjs.FimincoCode.GDRoroObjects2});
gdjs.FimincoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(33968316);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Roro"), gdjs.FimincoCode.GDRoroObjects2);
{for(var i = 0, len = gdjs.FimincoCode.GDRoroObjects2.length ;i < len;++i) {
    gdjs.FimincoCode.GDRoroObjects2[i].activateBehavior("NavMeshPathfindingBehavior", false);
}
}
{for(var i = 0, len = gdjs.FimincoCode.GDRoroObjects2.length ;i < len;++i) {
    gdjs.FimincoCode.GDRoroObjects2[i].activateBehavior("TopDownMovement", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Roro"), gdjs.FimincoCode.GDRoroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.FimincoCode.GDRoroObjects2.length === 0 ) ? 0 :gdjs.FimincoCode.GDRoroObjects2[0].getPointY("")) > 490);
}
if (isConditionTrue_0) {
/* Reuse gdjs.FimincoCode.GDRoroObjects2 */
{for(var i = 0, len = gdjs.FimincoCode.GDRoroObjects2.length ;i < len;++i) {
    gdjs.FimincoCode.GDRoroObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}
{for(var i = 0, len = gdjs.FimincoCode.GDRoroObjects2.length ;i < len;++i) {
    gdjs.FimincoCode.GDRoroObjects2[i].getBehavior("Resizable").setSize(222 * (0.70 + 0.45 * gdjs.evtTools.common.clamp(((gdjs.FimincoCode.GDRoroObjects2[i].getPointY("")) - 300) / 450, 0, 1)), 219 * (0.70 + 0.45 * gdjs.evtTools.common.clamp(((gdjs.FimincoCode.GDRoroObjects2[i].getPointY("")) - 300) / 450, 0, 1)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Roro"), gdjs.FimincoCode.GDRoroObjects2);
{gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.func(runtimeScene, gdjs.FimincoCode.mapOfGDgdjs_9546FimincoCode_9546GDRoroObjects2Objects, "NavMeshPathfindingBehavior", "TopDownMovement", "TopDownMovementAnimator", "NavMeshPathfindingAnimator", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Roro"), gdjs.FimincoCode.GDRoroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.FimincoCode.GDRoroObjects1.length === 0 ) ? 0 :gdjs.FimincoCode.GDRoroObjects1[0].getPointY("")) <= 490);
}
if (isConditionTrue_0) {
/* Reuse gdjs.FimincoCode.GDRoroObjects1 */
{for(var i = 0, len = gdjs.FimincoCode.GDRoroObjects1.length ;i < len;++i) {
    gdjs.FimincoCode.GDRoroObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.FimincoCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("autre_ecran"), gdjs.FimincoCode.GDautre_9595ecranObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FimincoCode.mapOfGDgdjs_9546FimincoCode_9546GDautre_95959595ecranObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "place de la mairie", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.FimincoCode.eventsList0(runtimeScene);
}


};

gdjs.FimincoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FimincoCode.GDfimincoObjects1.length = 0;
gdjs.FimincoCode.GDfimincoObjects2.length = 0;
gdjs.FimincoCode.GDfimincoObjects3.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects1.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects2.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects3.length = 0;
gdjs.FimincoCode.GDjean_9595charlesObjects1.length = 0;
gdjs.FimincoCode.GDjean_9595charlesObjects2.length = 0;
gdjs.FimincoCode.GDjean_9595charlesObjects3.length = 0;
gdjs.FimincoCode.GDballonObjects1.length = 0;
gdjs.FimincoCode.GDballonObjects2.length = 0;
gdjs.FimincoCode.GDballonObjects3.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects1.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects2.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects3.length = 0;
gdjs.FimincoCode.GDcloud1Objects1.length = 0;
gdjs.FimincoCode.GDcloud1Objects2.length = 0;
gdjs.FimincoCode.GDcloud1Objects3.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects3.length = 0;
gdjs.FimincoCode.GDfabienObjects1.length = 0;
gdjs.FimincoCode.GDfabienObjects2.length = 0;
gdjs.FimincoCode.GDfabienObjects3.length = 0;
gdjs.FimincoCode.GDclaudeObjects1.length = 0;
gdjs.FimincoCode.GDclaudeObjects2.length = 0;
gdjs.FimincoCode.GDclaudeObjects3.length = 0;
gdjs.FimincoCode.GDbackgroundObjects1.length = 0;
gdjs.FimincoCode.GDbackgroundObjects2.length = 0;
gdjs.FimincoCode.GDbackgroundObjects3.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects3.length = 0;
gdjs.FimincoCode.GDmouetteObjects1.length = 0;
gdjs.FimincoCode.GDmouetteObjects2.length = 0;
gdjs.FimincoCode.GDmouetteObjects3.length = 0;
gdjs.FimincoCode.GDwipObjects1.length = 0;
gdjs.FimincoCode.GDwipObjects2.length = 0;
gdjs.FimincoCode.GDwipObjects3.length = 0;
gdjs.FimincoCode.GDRoroObjects1.length = 0;
gdjs.FimincoCode.GDRoroObjects2.length = 0;
gdjs.FimincoCode.GDRoroObjects3.length = 0;
gdjs.FimincoCode.GDPOLINAObjects1.length = 0;
gdjs.FimincoCode.GDPOLINAObjects2.length = 0;
gdjs.FimincoCode.GDPOLINAObjects3.length = 0;
gdjs.FimincoCode.GDDIMITRIObjects1.length = 0;
gdjs.FimincoCode.GDDIMITRIObjects2.length = 0;
gdjs.FimincoCode.GDDIMITRIObjects3.length = 0;
gdjs.FimincoCode.GDluluObjects1.length = 0;
gdjs.FimincoCode.GDluluObjects2.length = 0;
gdjs.FimincoCode.GDluluObjects3.length = 0;
gdjs.FimincoCode.GDioanaObjects1.length = 0;
gdjs.FimincoCode.GDioanaObjects2.length = 0;
gdjs.FimincoCode.GDioanaObjects3.length = 0;
gdjs.FimincoCode.GDpaolaObjects1.length = 0;
gdjs.FimincoCode.GDpaolaObjects2.length = 0;
gdjs.FimincoCode.GDpaolaObjects3.length = 0;
gdjs.FimincoCode.GDservice_9595personne_9595mairieObjects1.length = 0;
gdjs.FimincoCode.GDservice_9595personne_9595mairieObjects2.length = 0;
gdjs.FimincoCode.GDservice_9595personne_9595mairieObjects3.length = 0;
gdjs.FimincoCode.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.FimincoCode.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.FimincoCode.GDtrain_9595de_9595vieObjects3.length = 0;
gdjs.FimincoCode.GDbouillonObjects1.length = 0;
gdjs.FimincoCode.GDbouillonObjects2.length = 0;
gdjs.FimincoCode.GDbouillonObjects3.length = 0;
gdjs.FimincoCode.GDluna_9595rossaObjects1.length = 0;
gdjs.FimincoCode.GDluna_9595rossaObjects2.length = 0;
gdjs.FimincoCode.GDluna_9595rossaObjects3.length = 0;
gdjs.FimincoCode.GDtrianonObjects1.length = 0;
gdjs.FimincoCode.GDtrianonObjects2.length = 0;
gdjs.FimincoCode.GDtrianonObjects3.length = 0;
gdjs.FimincoCode.GDmetroObjects1.length = 0;
gdjs.FimincoCode.GDmetroObjects2.length = 0;
gdjs.FimincoCode.GDmetroObjects3.length = 0;

gdjs.FimincoCode.eventsList1(runtimeScene);
gdjs.FimincoCode.GDfimincoObjects1.length = 0;
gdjs.FimincoCode.GDfimincoObjects2.length = 0;
gdjs.FimincoCode.GDfimincoObjects3.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects1.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects2.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects3.length = 0;
gdjs.FimincoCode.GDjean_9595charlesObjects1.length = 0;
gdjs.FimincoCode.GDjean_9595charlesObjects2.length = 0;
gdjs.FimincoCode.GDjean_9595charlesObjects3.length = 0;
gdjs.FimincoCode.GDballonObjects1.length = 0;
gdjs.FimincoCode.GDballonObjects2.length = 0;
gdjs.FimincoCode.GDballonObjects3.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects1.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects2.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects3.length = 0;
gdjs.FimincoCode.GDcloud1Objects1.length = 0;
gdjs.FimincoCode.GDcloud1Objects2.length = 0;
gdjs.FimincoCode.GDcloud1Objects3.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects3.length = 0;
gdjs.FimincoCode.GDfabienObjects1.length = 0;
gdjs.FimincoCode.GDfabienObjects2.length = 0;
gdjs.FimincoCode.GDfabienObjects3.length = 0;
gdjs.FimincoCode.GDclaudeObjects1.length = 0;
gdjs.FimincoCode.GDclaudeObjects2.length = 0;
gdjs.FimincoCode.GDclaudeObjects3.length = 0;
gdjs.FimincoCode.GDbackgroundObjects1.length = 0;
gdjs.FimincoCode.GDbackgroundObjects2.length = 0;
gdjs.FimincoCode.GDbackgroundObjects3.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects3.length = 0;
gdjs.FimincoCode.GDmouetteObjects1.length = 0;
gdjs.FimincoCode.GDmouetteObjects2.length = 0;
gdjs.FimincoCode.GDmouetteObjects3.length = 0;
gdjs.FimincoCode.GDwipObjects1.length = 0;
gdjs.FimincoCode.GDwipObjects2.length = 0;
gdjs.FimincoCode.GDwipObjects3.length = 0;
gdjs.FimincoCode.GDRoroObjects1.length = 0;
gdjs.FimincoCode.GDRoroObjects2.length = 0;
gdjs.FimincoCode.GDRoroObjects3.length = 0;
gdjs.FimincoCode.GDPOLINAObjects1.length = 0;
gdjs.FimincoCode.GDPOLINAObjects2.length = 0;
gdjs.FimincoCode.GDPOLINAObjects3.length = 0;
gdjs.FimincoCode.GDDIMITRIObjects1.length = 0;
gdjs.FimincoCode.GDDIMITRIObjects2.length = 0;
gdjs.FimincoCode.GDDIMITRIObjects3.length = 0;
gdjs.FimincoCode.GDluluObjects1.length = 0;
gdjs.FimincoCode.GDluluObjects2.length = 0;
gdjs.FimincoCode.GDluluObjects3.length = 0;
gdjs.FimincoCode.GDioanaObjects1.length = 0;
gdjs.FimincoCode.GDioanaObjects2.length = 0;
gdjs.FimincoCode.GDioanaObjects3.length = 0;
gdjs.FimincoCode.GDpaolaObjects1.length = 0;
gdjs.FimincoCode.GDpaolaObjects2.length = 0;
gdjs.FimincoCode.GDpaolaObjects3.length = 0;
gdjs.FimincoCode.GDservice_9595personne_9595mairieObjects1.length = 0;
gdjs.FimincoCode.GDservice_9595personne_9595mairieObjects2.length = 0;
gdjs.FimincoCode.GDservice_9595personne_9595mairieObjects3.length = 0;
gdjs.FimincoCode.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.FimincoCode.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.FimincoCode.GDtrain_9595de_9595vieObjects3.length = 0;
gdjs.FimincoCode.GDbouillonObjects1.length = 0;
gdjs.FimincoCode.GDbouillonObjects2.length = 0;
gdjs.FimincoCode.GDbouillonObjects3.length = 0;
gdjs.FimincoCode.GDluna_9595rossaObjects1.length = 0;
gdjs.FimincoCode.GDluna_9595rossaObjects2.length = 0;
gdjs.FimincoCode.GDluna_9595rossaObjects3.length = 0;
gdjs.FimincoCode.GDtrianonObjects1.length = 0;
gdjs.FimincoCode.GDtrianonObjects2.length = 0;
gdjs.FimincoCode.GDtrianonObjects3.length = 0;
gdjs.FimincoCode.GDmetroObjects1.length = 0;
gdjs.FimincoCode.GDmetroObjects2.length = 0;
gdjs.FimincoCode.GDmetroObjects3.length = 0;


return;

}

gdjs['FimincoCode'] = gdjs.FimincoCode;
