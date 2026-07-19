gdjs.FimincoCode = {};
gdjs.FimincoCode.localVariables = [];
gdjs.FimincoCode.idToCallbackMap = new Map();
gdjs.FimincoCode.GDfimincoObjects1= [];
gdjs.FimincoCode.GDfimincoObjects2= [];
gdjs.FimincoCode.GDfimincoObjects3= [];
gdjs.FimincoCode.GDfimincoObjects4= [];
gdjs.FimincoCode.GDautre_9595ecranObjects1= [];
gdjs.FimincoCode.GDautre_9595ecranObjects2= [];
gdjs.FimincoCode.GDautre_9595ecranObjects3= [];
gdjs.FimincoCode.GDautre_9595ecranObjects4= [];
gdjs.FimincoCode.GDballonObjects1= [];
gdjs.FimincoCode.GDballonObjects2= [];
gdjs.FimincoCode.GDballonObjects3= [];
gdjs.FimincoCode.GDballonObjects4= [];
gdjs.FimincoCode.GDfondu_9595noirObjects1= [];
gdjs.FimincoCode.GDfondu_9595noirObjects2= [];
gdjs.FimincoCode.GDfondu_9595noirObjects3= [];
gdjs.FimincoCode.GDfondu_9595noirObjects4= [];
gdjs.FimincoCode.GDcloud1Objects1= [];
gdjs.FimincoCode.GDcloud1Objects2= [];
gdjs.FimincoCode.GDcloud1Objects3= [];
gdjs.FimincoCode.GDcloud1Objects4= [];
gdjs.FimincoCode.GDDebugTextWeatherObjects1= [];
gdjs.FimincoCode.GDDebugTextWeatherObjects2= [];
gdjs.FimincoCode.GDDebugTextWeatherObjects3= [];
gdjs.FimincoCode.GDDebugTextWeatherObjects4= [];
gdjs.FimincoCode.GDfabienObjects1= [];
gdjs.FimincoCode.GDfabienObjects2= [];
gdjs.FimincoCode.GDfabienObjects3= [];
gdjs.FimincoCode.GDfabienObjects4= [];
gdjs.FimincoCode.GDclaudeObjects1= [];
gdjs.FimincoCode.GDclaudeObjects2= [];
gdjs.FimincoCode.GDclaudeObjects3= [];
gdjs.FimincoCode.GDclaudeObjects4= [];
gdjs.FimincoCode.GDbackgroundObjects1= [];
gdjs.FimincoCode.GDbackgroundObjects2= [];
gdjs.FimincoCode.GDbackgroundObjects3= [];
gdjs.FimincoCode.GDbackgroundObjects4= [];
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects1= [];
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects2= [];
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects3= [];
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects4= [];
gdjs.FimincoCode.GDBillieObjects1= [];
gdjs.FimincoCode.GDBillieObjects2= [];
gdjs.FimincoCode.GDBillieObjects3= [];
gdjs.FimincoCode.GDBillieObjects4= [];
gdjs.FimincoCode.GDDimitriObjects1= [];
gdjs.FimincoCode.GDDimitriObjects2= [];
gdjs.FimincoCode.GDDimitriObjects3= [];
gdjs.FimincoCode.GDDimitriObjects4= [];
gdjs.FimincoCode.GDRoroObjects1= [];
gdjs.FimincoCode.GDRoroObjects2= [];
gdjs.FimincoCode.GDRoroObjects3= [];
gdjs.FimincoCode.GDRoroObjects4= [];


gdjs.FimincoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.FimincoCode.GDfabienObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - (( gdjs.FimincoCode.GDfabienObjects3.length === 0 ) ? 0 :gdjs.FimincoCode.GDfabienObjects3[0].getPointX(""))) > Math.abs(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - (( gdjs.FimincoCode.GDfabienObjects3.length === 0 ) ? 0 :gdjs.FimincoCode.GDfabienObjects3[0].getPointY(""))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.FimincoCode.GDfabienObjects3 */
{for(var i = 0, len = gdjs.FimincoCode.GDfabienObjects3.length ;i < len;++i) {
    gdjs.FimincoCode.GDfabienObjects3[i].getBehavior("NavMeshPathfindingBehavior").SetDestination(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), (gdjs.FimincoCode.GDfabienObjects3[i].getPointY("")), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.FimincoCode.GDfabienObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - (( gdjs.FimincoCode.GDfabienObjects2.length === 0 ) ? 0 :gdjs.FimincoCode.GDfabienObjects2[0].getPointX(""))) < Math.abs(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - (( gdjs.FimincoCode.GDfabienObjects2.length === 0 ) ? 0 :gdjs.FimincoCode.GDfabienObjects2[0].getPointY(""))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.FimincoCode.GDfabienObjects2 */
{for(var i = 0, len = gdjs.FimincoCode.GDfabienObjects2.length ;i < len;++i) {
    gdjs.FimincoCode.GDfabienObjects2[i].getBehavior("NavMeshPathfindingBehavior").SetDestination((gdjs.FimincoCode.GDfabienObjects2[i].getPointX("")), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), null);
}
}
}

}


};gdjs.FimincoCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.FimincoCode.GDfabienObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - (( gdjs.FimincoCode.GDfabienObjects3.length === 0 ) ? 0 :gdjs.FimincoCode.GDfabienObjects3[0].getPointX(""))) > Math.abs(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - (( gdjs.FimincoCode.GDfabienObjects3.length === 0 ) ? 0 :gdjs.FimincoCode.GDfabienObjects3[0].getPointY(""))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.FimincoCode.GDfabienObjects3 */
{for(var i = 0, len = gdjs.FimincoCode.GDfabienObjects3.length ;i < len;++i) {
    gdjs.FimincoCode.GDfabienObjects3[i].getBehavior("NavMeshPathfindingBehavior").SetDestination(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), (gdjs.FimincoCode.GDfabienObjects3[i].getPointY("")), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.FimincoCode.GDfabienObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - (( gdjs.FimincoCode.GDfabienObjects2.length === 0 ) ? 0 :gdjs.FimincoCode.GDfabienObjects2[0].getPointX(""))) < Math.abs(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - (( gdjs.FimincoCode.GDfabienObjects2.length === 0 ) ? 0 :gdjs.FimincoCode.GDfabienObjects2[0].getPointY(""))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.FimincoCode.GDfabienObjects2 */
{for(var i = 0, len = gdjs.FimincoCode.GDfabienObjects2.length ;i < len;++i) {
    gdjs.FimincoCode.GDfabienObjects2[i].getBehavior("NavMeshPathfindingBehavior").SetDestination((gdjs.FimincoCode.GDfabienObjects2[i].getPointX("")), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), null);
}
}
}

}


};gdjs.FimincoCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Roro"), gdjs.FimincoCode.GDRoroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FimincoCode.GDRoroObjects2.length;i<l;++i) {
    if ( gdjs.FimincoCode.GDRoroObjects2[i].behaviorActivated("NavMeshPathfindingBehavior") ) {
        isConditionTrue_0 = true;
        gdjs.FimincoCode.GDRoroObjects2[k] = gdjs.FimincoCode.GDRoroObjects2[i];
        ++k;
    }
}
gdjs.FimincoCode.GDRoroObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimincoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Roro"), gdjs.FimincoCode.GDRoroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FimincoCode.GDRoroObjects2.length;i<l;++i) {
    if ( gdjs.FimincoCode.GDRoroObjects2[i].behaviorActivated("NavMeshPathfindingBehavior") ) {
        isConditionTrue_0 = true;
        gdjs.FimincoCode.GDRoroObjects2[k] = gdjs.FimincoCode.GDRoroObjects2[i];
        ++k;
    }
}
gdjs.FimincoCode.GDRoroObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimincoCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.FimincoCode.mapOfGDgdjs_9546FimincoCode_9546GDautre_95959595ecranObjects1Objects = Hashtable.newFrom({"autre_ecran": gdjs.FimincoCode.GDautre_9595ecranObjects1});
gdjs.FimincoCode.eventsList3 = function(runtimeScene) {

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


gdjs.FimincoCode.eventsList2(runtimeScene);
}


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


};

gdjs.FimincoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FimincoCode.GDfimincoObjects1.length = 0;
gdjs.FimincoCode.GDfimincoObjects2.length = 0;
gdjs.FimincoCode.GDfimincoObjects3.length = 0;
gdjs.FimincoCode.GDfimincoObjects4.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects1.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects2.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects3.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects4.length = 0;
gdjs.FimincoCode.GDballonObjects1.length = 0;
gdjs.FimincoCode.GDballonObjects2.length = 0;
gdjs.FimincoCode.GDballonObjects3.length = 0;
gdjs.FimincoCode.GDballonObjects4.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects1.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects2.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects3.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects4.length = 0;
gdjs.FimincoCode.GDcloud1Objects1.length = 0;
gdjs.FimincoCode.GDcloud1Objects2.length = 0;
gdjs.FimincoCode.GDcloud1Objects3.length = 0;
gdjs.FimincoCode.GDcloud1Objects4.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects3.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects4.length = 0;
gdjs.FimincoCode.GDfabienObjects1.length = 0;
gdjs.FimincoCode.GDfabienObjects2.length = 0;
gdjs.FimincoCode.GDfabienObjects3.length = 0;
gdjs.FimincoCode.GDfabienObjects4.length = 0;
gdjs.FimincoCode.GDclaudeObjects1.length = 0;
gdjs.FimincoCode.GDclaudeObjects2.length = 0;
gdjs.FimincoCode.GDclaudeObjects3.length = 0;
gdjs.FimincoCode.GDclaudeObjects4.length = 0;
gdjs.FimincoCode.GDbackgroundObjects1.length = 0;
gdjs.FimincoCode.GDbackgroundObjects2.length = 0;
gdjs.FimincoCode.GDbackgroundObjects3.length = 0;
gdjs.FimincoCode.GDbackgroundObjects4.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects3.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects4.length = 0;
gdjs.FimincoCode.GDBillieObjects1.length = 0;
gdjs.FimincoCode.GDBillieObjects2.length = 0;
gdjs.FimincoCode.GDBillieObjects3.length = 0;
gdjs.FimincoCode.GDBillieObjects4.length = 0;
gdjs.FimincoCode.GDDimitriObjects1.length = 0;
gdjs.FimincoCode.GDDimitriObjects2.length = 0;
gdjs.FimincoCode.GDDimitriObjects3.length = 0;
gdjs.FimincoCode.GDDimitriObjects4.length = 0;
gdjs.FimincoCode.GDRoroObjects1.length = 0;
gdjs.FimincoCode.GDRoroObjects2.length = 0;
gdjs.FimincoCode.GDRoroObjects3.length = 0;
gdjs.FimincoCode.GDRoroObjects4.length = 0;

gdjs.FimincoCode.eventsList3(runtimeScene);
gdjs.FimincoCode.GDfimincoObjects1.length = 0;
gdjs.FimincoCode.GDfimincoObjects2.length = 0;
gdjs.FimincoCode.GDfimincoObjects3.length = 0;
gdjs.FimincoCode.GDfimincoObjects4.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects1.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects2.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects3.length = 0;
gdjs.FimincoCode.GDautre_9595ecranObjects4.length = 0;
gdjs.FimincoCode.GDballonObjects1.length = 0;
gdjs.FimincoCode.GDballonObjects2.length = 0;
gdjs.FimincoCode.GDballonObjects3.length = 0;
gdjs.FimincoCode.GDballonObjects4.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects1.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects2.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects3.length = 0;
gdjs.FimincoCode.GDfondu_9595noirObjects4.length = 0;
gdjs.FimincoCode.GDcloud1Objects1.length = 0;
gdjs.FimincoCode.GDcloud1Objects2.length = 0;
gdjs.FimincoCode.GDcloud1Objects3.length = 0;
gdjs.FimincoCode.GDcloud1Objects4.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects1.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects2.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects3.length = 0;
gdjs.FimincoCode.GDDebugTextWeatherObjects4.length = 0;
gdjs.FimincoCode.GDfabienObjects1.length = 0;
gdjs.FimincoCode.GDfabienObjects2.length = 0;
gdjs.FimincoCode.GDfabienObjects3.length = 0;
gdjs.FimincoCode.GDfabienObjects4.length = 0;
gdjs.FimincoCode.GDclaudeObjects1.length = 0;
gdjs.FimincoCode.GDclaudeObjects2.length = 0;
gdjs.FimincoCode.GDclaudeObjects3.length = 0;
gdjs.FimincoCode.GDclaudeObjects4.length = 0;
gdjs.FimincoCode.GDbackgroundObjects1.length = 0;
gdjs.FimincoCode.GDbackgroundObjects2.length = 0;
gdjs.FimincoCode.GDbackgroundObjects3.length = 0;
gdjs.FimincoCode.GDbackgroundObjects4.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects1.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects2.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects3.length = 0;
gdjs.FimincoCode.GDballoon_9595no_9595levelObjects4.length = 0;
gdjs.FimincoCode.GDBillieObjects1.length = 0;
gdjs.FimincoCode.GDBillieObjects2.length = 0;
gdjs.FimincoCode.GDBillieObjects3.length = 0;
gdjs.FimincoCode.GDBillieObjects4.length = 0;
gdjs.FimincoCode.GDDimitriObjects1.length = 0;
gdjs.FimincoCode.GDDimitriObjects2.length = 0;
gdjs.FimincoCode.GDDimitriObjects3.length = 0;
gdjs.FimincoCode.GDDimitriObjects4.length = 0;
gdjs.FimincoCode.GDRoroObjects1.length = 0;
gdjs.FimincoCode.GDRoroObjects2.length = 0;
gdjs.FimincoCode.GDRoroObjects3.length = 0;
gdjs.FimincoCode.GDRoroObjects4.length = 0;


return;

}

gdjs['FimincoCode'] = gdjs.FimincoCode;
