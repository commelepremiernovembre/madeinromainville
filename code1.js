gdjs.level2Code = {};
gdjs.level2Code.localVariables = [];
gdjs.level2Code.idToCallbackMap = new Map();
gdjs.level2Code.GDFloorObjects1_1final = [];

gdjs.level2Code.GDMindyObjects1_1final = [];

gdjs.level2Code.GDMindyObjects1= [];
gdjs.level2Code.GDMindyObjects2= [];
gdjs.level2Code.GDMindyObjects3= [];
gdjs.level2Code.GDMindyObjects4= [];
gdjs.level2Code.GDBatObjects1= [];
gdjs.level2Code.GDBatObjects2= [];
gdjs.level2Code.GDBatObjects3= [];
gdjs.level2Code.GDBatObjects4= [];
gdjs.level2Code.GDFloorObjects1= [];
gdjs.level2Code.GDFloorObjects2= [];
gdjs.level2Code.GDFloorObjects3= [];
gdjs.level2Code.GDFloorObjects4= [];
gdjs.level2Code.GDTreeObjects1= [];
gdjs.level2Code.GDTreeObjects2= [];
gdjs.level2Code.GDTreeObjects3= [];
gdjs.level2Code.GDTreeObjects4= [];
gdjs.level2Code.GDTileRowObstacleObjects1= [];
gdjs.level2Code.GDTileRowObstacleObjects2= [];
gdjs.level2Code.GDTileRowObstacleObjects3= [];
gdjs.level2Code.GDTileRowObstacleObjects4= [];
gdjs.level2Code.GDTileColumnObstacleObjects1= [];
gdjs.level2Code.GDTileColumnObstacleObjects2= [];
gdjs.level2Code.GDTileColumnObstacleObjects3= [];
gdjs.level2Code.GDTileColumnObstacleObjects4= [];
gdjs.level2Code.GDTileObstacleObjects1= [];
gdjs.level2Code.GDTileObstacleObjects2= [];
gdjs.level2Code.GDTileObstacleObjects3= [];
gdjs.level2Code.GDTileObstacleObjects4= [];
gdjs.level2Code.GDNavMeshObjects1= [];
gdjs.level2Code.GDNavMeshObjects2= [];
gdjs.level2Code.GDNavMeshObjects3= [];
gdjs.level2Code.GDNavMeshObjects4= [];
gdjs.level2Code.GDRainEmitterObjects1= [];
gdjs.level2Code.GDRainEmitterObjects2= [];
gdjs.level2Code.GDRainEmitterObjects3= [];
gdjs.level2Code.GDRainEmitterObjects4= [];
gdjs.level2Code.GDWeatherDebugTextObjects1= [];
gdjs.level2Code.GDWeatherDebugTextObjects2= [];
gdjs.level2Code.GDWeatherDebugTextObjects3= [];
gdjs.level2Code.GDWeatherDebugTextObjects4= [];
gdjs.level2Code.GDHeatDisplacementTextureObjects1= [];
gdjs.level2Code.GDHeatDisplacementTextureObjects2= [];
gdjs.level2Code.GDHeatDisplacementTextureObjects3= [];
gdjs.level2Code.GDHeatDisplacementTextureObjects4= [];
gdjs.level2Code.GDmapObjects1= [];
gdjs.level2Code.GDmapObjects2= [];
gdjs.level2Code.GDmapObjects3= [];
gdjs.level2Code.GDmapObjects4= [];
gdjs.level2Code.GDballonObjects1= [];
gdjs.level2Code.GDballonObjects2= [];
gdjs.level2Code.GDballonObjects3= [];
gdjs.level2Code.GDballonObjects4= [];
gdjs.level2Code.GDfondu_9595noirObjects1= [];
gdjs.level2Code.GDfondu_9595noirObjects2= [];
gdjs.level2Code.GDfondu_9595noirObjects3= [];
gdjs.level2Code.GDfondu_9595noirObjects4= [];


gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDNavMeshObjects1Objects = Hashtable.newFrom({"NavMesh": gdjs.level2Code.GDNavMeshObjects1});
gdjs.level2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.level2Code.GDMindyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NavMesh"), gdjs.level2Code.GDNavMeshObjects1);
{for(var i = 0, len = gdjs.level2Code.GDMindyObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDMindyObjects1[i].getBehavior("NavMeshPathfindingBehavior").SetDestination((gdjs.level2Code.GDMindyObjects1[i].getPointX("")), (gdjs.level2Code.GDMindyObjects1[i].getPointY("")), null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDMindyObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDMindyObjects1[i].getBehavior("NavMeshPathfindingBehavior").DrawNavMesh(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDNavMeshObjects1Objects, null);
}
}
}

}


};gdjs.level2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.level2Code.GDMindyObjects3);
{for(var i = 0, len = gdjs.level2Code.GDMindyObjects3.length ;i < len;++i) {
    gdjs.level2Code.GDMindyObjects3[i].activateBehavior("NavMeshPathfindingBehavior", true);
}
}
{for(var i = 0, len = gdjs.level2Code.GDMindyObjects3.length ;i < len;++i) {
    gdjs.level2Code.GDMindyObjects3[i].getBehavior("NavMeshPathfindingBehavior").SetDestination(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.level2Code.GDMindyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2Code.GDMindyObjects2.length;i<l;++i) {
    if ( gdjs.level2Code.GDMindyObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.level2Code.GDMindyObjects2[k] = gdjs.level2Code.GDMindyObjects2[i];
        ++k;
    }
}
gdjs.level2Code.GDMindyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDMindyObjects2 */
{for(var i = 0, len = gdjs.level2Code.GDMindyObjects2.length ;i < len;++i) {
    gdjs.level2Code.GDMindyObjects2[i].activateBehavior("NavMeshPathfindingBehavior", false);
}
}
}

}


};gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDMindyObjects1Objects = Hashtable.newFrom({"Mindy": gdjs.level2Code.GDMindyObjects1});
gdjs.level2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.level2Code.GDMindyObjects1);
{gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.func(runtimeScene, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDMindyObjects1Objects, "NavMeshPathfindingBehavior", "TopDownMovement", "TopDownMovementAnimator", "NavMeshPathfindingAnimator", null);
}
}

}


};gdjs.level2Code.eventsList3 = function(runtimeScene) {

{


gdjs.level2Code.eventsList1(runtimeScene);
}


{


gdjs.level2Code.eventsList2(runtimeScene);
}


};gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDTileRowObstacleObjects2ObjectsGDgdjs_9546level2Code_9546GDTileColumnObstacleObjects2ObjectsGDgdjs_9546level2Code_9546GDTileObstacleObjects2Objects = Hashtable.newFrom({"TileRowObstacle": gdjs.level2Code.GDTileRowObstacleObjects2, "TileColumnObstacle": gdjs.level2Code.GDTileColumnObstacleObjects2, "TileObstacle": gdjs.level2Code.GDTileObstacleObjects2});
gdjs.level2Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.level2Code.GDMindyObjects2);
gdjs.copyArray(runtimeScene.getObjects("TileColumnObstacle"), gdjs.level2Code.GDTileColumnObstacleObjects2);
gdjs.copyArray(runtimeScene.getObjects("TileObstacle"), gdjs.level2Code.GDTileObstacleObjects2);
gdjs.copyArray(runtimeScene.getObjects("TileRowObstacle"), gdjs.level2Code.GDTileRowObstacleObjects2);
{for(var i = 0, len = gdjs.level2Code.GDMindyObjects2.length ;i < len;++i) {
    gdjs.level2Code.GDMindyObjects2[i].separateFromObjectsList(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDTileRowObstacleObjects2ObjectsGDgdjs_9546level2Code_9546GDTileColumnObstacleObjects2ObjectsGDgdjs_9546level2Code_9546GDTileObstacleObjects2Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.level2Code.GDMindyObjects1);
{for(var i = 0, len = gdjs.level2Code.GDMindyObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDMindyObjects1[i].getBehavior("SmoothCamera").MoveCameraCloser(null);
}
}
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "", 0, "Level1", 0, true, true, false, false, null);
}
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "", 0, "Level2", 0, true, true, false, false, null);
}
}

}


};gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDMindyObjects1Objects = Hashtable.newFrom({"Mindy": gdjs.level2Code.GDMindyObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDBatObjects1Objects = Hashtable.newFrom({"Bat": gdjs.level2Code.GDBatObjects1});
gdjs.level2Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bat"), gdjs.level2Code.GDBatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.level2Code.GDMindyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDMindyObjects1Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDBatObjects1Objects, 100, true);
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDBatObjects1 */
/* Reuse gdjs.level2Code.GDMindyObjects1 */
{for(var i = 0, len = gdjs.level2Code.GDBatObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDBatObjects1[i].addForceTowardPosition((( gdjs.level2Code.GDMindyObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDMindyObjects1[0].getPointX("Head")), (( gdjs.level2Code.GDMindyObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDMindyObjects1[0].getPointY("Head")), 150, 0);
}
}
}

}


};gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDMindyObjects2Objects = Hashtable.newFrom({"Mindy": gdjs.level2Code.GDMindyObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDMindyObjects2Objects = Hashtable.newFrom({"Mindy": gdjs.level2Code.GDMindyObjects2});
gdjs.level2Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.level2Code.GDMindyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CharacterMovement__IsMoving.func(runtimeScene, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDMindyObjects2Objects, "NavMeshPathfindingBehavior", "TopDownMovement", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30638140);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "grass_light_steps.mp3", 1, true, 5, 1);
}
}

}


{

gdjs.level2Code.GDFloorObjects1.length = 0;

gdjs.level2Code.GDMindyObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.level2Code.GDFloorObjects1_1final.length = 0;
gdjs.level2Code.GDMindyObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.level2Code.GDFloorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.level2Code.GDMindyObjects2);
for (var i = 0, k = 0, l = gdjs.level2Code.GDFloorObjects2.length;i<l;++i) {
    if ( gdjs.level2Code.GDFloorObjects2[i].isCollidingWithPoint((( gdjs.level2Code.GDMindyObjects2.length === 0 ) ? 0 :gdjs.level2Code.GDMindyObjects2[0].getPointX("Foot")), (( gdjs.level2Code.GDMindyObjects2.length === 0 ) ? 0 :gdjs.level2Code.GDMindyObjects2[0].getPointY("Foot"))) ) {
        isConditionTrue_1 = true;
        gdjs.level2Code.GDFloorObjects2[k] = gdjs.level2Code.GDFloorObjects2[i];
        ++k;
    }
}
gdjs.level2Code.GDFloorObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.level2Code.GDFloorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.level2Code.GDFloorObjects1_1final.indexOf(gdjs.level2Code.GDFloorObjects2[j]) === -1 )
            gdjs.level2Code.GDFloorObjects1_1final.push(gdjs.level2Code.GDFloorObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.level2Code.GDMindyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.level2Code.GDMindyObjects1_1final.indexOf(gdjs.level2Code.GDMindyObjects2[j]) === -1 )
            gdjs.level2Code.GDMindyObjects1_1final.push(gdjs.level2Code.GDMindyObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.level2Code.GDMindyObjects2);
isConditionTrue_1 = !(gdjs.evtsExt__CharacterMovement__IsMoving.func(runtimeScene, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDMindyObjects2Objects, "NavMeshPathfindingBehavior", "TopDownMovement", null));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.level2Code.GDMindyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.level2Code.GDMindyObjects1_1final.indexOf(gdjs.level2Code.GDMindyObjects2[j]) === -1 )
            gdjs.level2Code.GDMindyObjects1_1final.push(gdjs.level2Code.GDMindyObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.level2Code.GDFloorObjects1_1final, gdjs.level2Code.GDFloorObjects1);
gdjs.copyArray(gdjs.level2Code.GDMindyObjects1_1final, gdjs.level2Code.GDMindyObjects1);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
}

}


};gdjs.level2Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.level2Code.GDMindyObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondu_noir"), gdjs.level2Code.GDfondu_9595noirObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level2Code.GDMindyObjects1.length !== 0 ? gdjs.level2Code.GDMindyObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Obstacle");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "fondu noir");
}
{for(var i = 0, len = gdjs.level2Code.GDfondu_9595noirObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDfondu_9595noirObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FonduNoirOut", 0, "linear", 3, true);
}
}

{ //Subevents
gdjs.level2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.level2Code.eventsList3(runtimeScene);
}


{


gdjs.level2Code.eventsList4(runtimeScene);
}


{


gdjs.level2Code.eventsList5(runtimeScene);
}


{


gdjs.level2Code.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level2Code.GDMindyObjects1.length = 0;
gdjs.level2Code.GDMindyObjects2.length = 0;
gdjs.level2Code.GDMindyObjects3.length = 0;
gdjs.level2Code.GDMindyObjects4.length = 0;
gdjs.level2Code.GDBatObjects1.length = 0;
gdjs.level2Code.GDBatObjects2.length = 0;
gdjs.level2Code.GDBatObjects3.length = 0;
gdjs.level2Code.GDBatObjects4.length = 0;
gdjs.level2Code.GDFloorObjects1.length = 0;
gdjs.level2Code.GDFloorObjects2.length = 0;
gdjs.level2Code.GDFloorObjects3.length = 0;
gdjs.level2Code.GDFloorObjects4.length = 0;
gdjs.level2Code.GDTreeObjects1.length = 0;
gdjs.level2Code.GDTreeObjects2.length = 0;
gdjs.level2Code.GDTreeObjects3.length = 0;
gdjs.level2Code.GDTreeObjects4.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects1.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects2.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects3.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects4.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects1.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects2.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects3.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects4.length = 0;
gdjs.level2Code.GDTileObstacleObjects1.length = 0;
gdjs.level2Code.GDTileObstacleObjects2.length = 0;
gdjs.level2Code.GDTileObstacleObjects3.length = 0;
gdjs.level2Code.GDTileObstacleObjects4.length = 0;
gdjs.level2Code.GDNavMeshObjects1.length = 0;
gdjs.level2Code.GDNavMeshObjects2.length = 0;
gdjs.level2Code.GDNavMeshObjects3.length = 0;
gdjs.level2Code.GDNavMeshObjects4.length = 0;
gdjs.level2Code.GDRainEmitterObjects1.length = 0;
gdjs.level2Code.GDRainEmitterObjects2.length = 0;
gdjs.level2Code.GDRainEmitterObjects3.length = 0;
gdjs.level2Code.GDRainEmitterObjects4.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects1.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects2.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects3.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects4.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects1.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects2.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects3.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects4.length = 0;
gdjs.level2Code.GDmapObjects1.length = 0;
gdjs.level2Code.GDmapObjects2.length = 0;
gdjs.level2Code.GDmapObjects3.length = 0;
gdjs.level2Code.GDmapObjects4.length = 0;
gdjs.level2Code.GDballonObjects1.length = 0;
gdjs.level2Code.GDballonObjects2.length = 0;
gdjs.level2Code.GDballonObjects3.length = 0;
gdjs.level2Code.GDballonObjects4.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects1.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects2.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects3.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects4.length = 0;

gdjs.level2Code.eventsList7(runtimeScene);
gdjs.level2Code.GDMindyObjects1.length = 0;
gdjs.level2Code.GDMindyObjects2.length = 0;
gdjs.level2Code.GDMindyObjects3.length = 0;
gdjs.level2Code.GDMindyObjects4.length = 0;
gdjs.level2Code.GDBatObjects1.length = 0;
gdjs.level2Code.GDBatObjects2.length = 0;
gdjs.level2Code.GDBatObjects3.length = 0;
gdjs.level2Code.GDBatObjects4.length = 0;
gdjs.level2Code.GDFloorObjects1.length = 0;
gdjs.level2Code.GDFloorObjects2.length = 0;
gdjs.level2Code.GDFloorObjects3.length = 0;
gdjs.level2Code.GDFloorObjects4.length = 0;
gdjs.level2Code.GDTreeObjects1.length = 0;
gdjs.level2Code.GDTreeObjects2.length = 0;
gdjs.level2Code.GDTreeObjects3.length = 0;
gdjs.level2Code.GDTreeObjects4.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects1.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects2.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects3.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects4.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects1.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects2.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects3.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects4.length = 0;
gdjs.level2Code.GDTileObstacleObjects1.length = 0;
gdjs.level2Code.GDTileObstacleObjects2.length = 0;
gdjs.level2Code.GDTileObstacleObjects3.length = 0;
gdjs.level2Code.GDTileObstacleObjects4.length = 0;
gdjs.level2Code.GDNavMeshObjects1.length = 0;
gdjs.level2Code.GDNavMeshObjects2.length = 0;
gdjs.level2Code.GDNavMeshObjects3.length = 0;
gdjs.level2Code.GDNavMeshObjects4.length = 0;
gdjs.level2Code.GDRainEmitterObjects1.length = 0;
gdjs.level2Code.GDRainEmitterObjects2.length = 0;
gdjs.level2Code.GDRainEmitterObjects3.length = 0;
gdjs.level2Code.GDRainEmitterObjects4.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects1.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects2.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects3.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects4.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects1.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects2.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects3.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects4.length = 0;
gdjs.level2Code.GDmapObjects1.length = 0;
gdjs.level2Code.GDmapObjects2.length = 0;
gdjs.level2Code.GDmapObjects3.length = 0;
gdjs.level2Code.GDmapObjects4.length = 0;
gdjs.level2Code.GDballonObjects1.length = 0;
gdjs.level2Code.GDballonObjects2.length = 0;
gdjs.level2Code.GDballonObjects3.length = 0;
gdjs.level2Code.GDballonObjects4.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects1.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects2.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects3.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects4.length = 0;


return;

}

gdjs['level2Code'] = gdjs.level2Code;
