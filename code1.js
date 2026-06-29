gdjs.level2Code = {};
gdjs.level2Code.localVariables = [];
gdjs.level2Code.idToCallbackMap = new Map();
gdjs.level2Code.forEachIndex2 = 0;

gdjs.level2Code.forEachIndex3 = 0;

gdjs.level2Code.forEachObjects2 = [];

gdjs.level2Code.forEachObjects3 = [];

gdjs.level2Code.forEachTemporary2 = null;

gdjs.level2Code.forEachTemporary3 = null;

gdjs.level2Code.forEachTotalCount2 = 0;

gdjs.level2Code.forEachTotalCount3 = 0;

gdjs.level2Code.GDfabienObjects1= [];
gdjs.level2Code.GDfabienObjects2= [];
gdjs.level2Code.GDfabienObjects3= [];
gdjs.level2Code.GDfabienObjects4= [];
gdjs.level2Code.GDfabienObjects5= [];
gdjs.level2Code.GDBatObjects1= [];
gdjs.level2Code.GDBatObjects2= [];
gdjs.level2Code.GDBatObjects3= [];
gdjs.level2Code.GDBatObjects4= [];
gdjs.level2Code.GDBatObjects5= [];
gdjs.level2Code.GDFloorObjects1= [];
gdjs.level2Code.GDFloorObjects2= [];
gdjs.level2Code.GDFloorObjects3= [];
gdjs.level2Code.GDFloorObjects4= [];
gdjs.level2Code.GDFloorObjects5= [];
gdjs.level2Code.GDTreeObjects1= [];
gdjs.level2Code.GDTreeObjects2= [];
gdjs.level2Code.GDTreeObjects3= [];
gdjs.level2Code.GDTreeObjects4= [];
gdjs.level2Code.GDTreeObjects5= [];
gdjs.level2Code.GDTileRowObstacleObjects1= [];
gdjs.level2Code.GDTileRowObstacleObjects2= [];
gdjs.level2Code.GDTileRowObstacleObjects3= [];
gdjs.level2Code.GDTileRowObstacleObjects4= [];
gdjs.level2Code.GDTileRowObstacleObjects5= [];
gdjs.level2Code.GDTileColumnObstacleObjects1= [];
gdjs.level2Code.GDTileColumnObstacleObjects2= [];
gdjs.level2Code.GDTileColumnObstacleObjects3= [];
gdjs.level2Code.GDTileColumnObstacleObjects4= [];
gdjs.level2Code.GDTileColumnObstacleObjects5= [];
gdjs.level2Code.GDTileObstacleObjects1= [];
gdjs.level2Code.GDTileObstacleObjects2= [];
gdjs.level2Code.GDTileObstacleObjects3= [];
gdjs.level2Code.GDTileObstacleObjects4= [];
gdjs.level2Code.GDTileObstacleObjects5= [];
gdjs.level2Code.GDNavMeshObjects1= [];
gdjs.level2Code.GDNavMeshObjects2= [];
gdjs.level2Code.GDNavMeshObjects3= [];
gdjs.level2Code.GDNavMeshObjects4= [];
gdjs.level2Code.GDNavMeshObjects5= [];
gdjs.level2Code.GDWeatherDebugTextObjects1= [];
gdjs.level2Code.GDWeatherDebugTextObjects2= [];
gdjs.level2Code.GDWeatherDebugTextObjects3= [];
gdjs.level2Code.GDWeatherDebugTextObjects4= [];
gdjs.level2Code.GDWeatherDebugTextObjects5= [];
gdjs.level2Code.GDHeatDisplacementTextureObjects1= [];
gdjs.level2Code.GDHeatDisplacementTextureObjects2= [];
gdjs.level2Code.GDHeatDisplacementTextureObjects3= [];
gdjs.level2Code.GDHeatDisplacementTextureObjects4= [];
gdjs.level2Code.GDHeatDisplacementTextureObjects5= [];
gdjs.level2Code.GDmapObjects1= [];
gdjs.level2Code.GDmapObjects2= [];
gdjs.level2Code.GDmapObjects3= [];
gdjs.level2Code.GDmapObjects4= [];
gdjs.level2Code.GDmapObjects5= [];
gdjs.level2Code.GDfigurantObjects1= [];
gdjs.level2Code.GDfigurantObjects2= [];
gdjs.level2Code.GDfigurantObjects3= [];
gdjs.level2Code.GDfigurantObjects4= [];
gdjs.level2Code.GDfigurantObjects5= [];
gdjs.level2Code.GDskyObjects1= [];
gdjs.level2Code.GDskyObjects2= [];
gdjs.level2Code.GDskyObjects3= [];
gdjs.level2Code.GDskyObjects4= [];
gdjs.level2Code.GDskyObjects5= [];
gdjs.level2Code.GDnuageObjects1= [];
gdjs.level2Code.GDnuageObjects2= [];
gdjs.level2Code.GDnuageObjects3= [];
gdjs.level2Code.GDnuageObjects4= [];
gdjs.level2Code.GDnuageObjects5= [];
gdjs.level2Code.GDnuage_95952Objects1= [];
gdjs.level2Code.GDnuage_95952Objects2= [];
gdjs.level2Code.GDnuage_95952Objects3= [];
gdjs.level2Code.GDnuage_95952Objects4= [];
gdjs.level2Code.GDnuage_95952Objects5= [];
gdjs.level2Code.GDpjetteObjects1= [];
gdjs.level2Code.GDpjetteObjects2= [];
gdjs.level2Code.GDpjetteObjects3= [];
gdjs.level2Code.GDpjetteObjects4= [];
gdjs.level2Code.GDpjetteObjects5= [];
gdjs.level2Code.GDtrottoirObjects1= [];
gdjs.level2Code.GDtrottoirObjects2= [];
gdjs.level2Code.GDtrottoirObjects3= [];
gdjs.level2Code.GDtrottoirObjects4= [];
gdjs.level2Code.GDtrottoirObjects5= [];
gdjs.level2Code.GDtrottoir_9595rondObjects1= [];
gdjs.level2Code.GDtrottoir_9595rondObjects2= [];
gdjs.level2Code.GDtrottoir_9595rondObjects3= [];
gdjs.level2Code.GDtrottoir_9595rondObjects4= [];
gdjs.level2Code.GDtrottoir_9595rondObjects5= [];
gdjs.level2Code.GDpassage_9595pietonObjects1= [];
gdjs.level2Code.GDpassage_9595pietonObjects2= [];
gdjs.level2Code.GDpassage_9595pietonObjects3= [];
gdjs.level2Code.GDpassage_9595pietonObjects4= [];
gdjs.level2Code.GDpassage_9595pietonObjects5= [];
gdjs.level2Code.GDarbreObjects1= [];
gdjs.level2Code.GDarbreObjects2= [];
gdjs.level2Code.GDarbreObjects3= [];
gdjs.level2Code.GDarbreObjects4= [];
gdjs.level2Code.GDarbreObjects5= [];
gdjs.level2Code.GDtrottoir_9595bordObjects1= [];
gdjs.level2Code.GDtrottoir_9595bordObjects2= [];
gdjs.level2Code.GDtrottoir_9595bordObjects3= [];
gdjs.level2Code.GDtrottoir_9595bordObjects4= [];
gdjs.level2Code.GDtrottoir_9595bordObjects5= [];
gdjs.level2Code.GDbancObjects1= [];
gdjs.level2Code.GDbancObjects2= [];
gdjs.level2Code.GDbancObjects3= [];
gdjs.level2Code.GDbancObjects4= [];
gdjs.level2Code.GDbancObjects5= [];
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects1= [];
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects2= [];
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects3= [];
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects4= [];
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects5= [];
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects1= [];
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects2= [];
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects3= [];
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects4= [];
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects5= [];
gdjs.level2Code.GDvoiture_9595rougeObjects1= [];
gdjs.level2Code.GDvoiture_9595rougeObjects2= [];
gdjs.level2Code.GDvoiture_9595rougeObjects3= [];
gdjs.level2Code.GDvoiture_9595rougeObjects4= [];
gdjs.level2Code.GDvoiture_9595rougeObjects5= [];
gdjs.level2Code.GDrouteObjects1= [];
gdjs.level2Code.GDrouteObjects2= [];
gdjs.level2Code.GDrouteObjects3= [];
gdjs.level2Code.GDrouteObjects4= [];
gdjs.level2Code.GDrouteObjects5= [];
gdjs.level2Code.GDroute_9595bande_9595blancheObjects1= [];
gdjs.level2Code.GDroute_9595bande_9595blancheObjects2= [];
gdjs.level2Code.GDroute_9595bande_9595blancheObjects3= [];
gdjs.level2Code.GDroute_9595bande_9595blancheObjects4= [];
gdjs.level2Code.GDroute_9595bande_9595blancheObjects5= [];
gdjs.level2Code.GDmetroObjects1= [];
gdjs.level2Code.GDmetroObjects2= [];
gdjs.level2Code.GDmetroObjects3= [];
gdjs.level2Code.GDmetroObjects4= [];
gdjs.level2Code.GDmetroObjects5= [];
gdjs.level2Code.GDtrain_9595de_9595vieObjects1= [];
gdjs.level2Code.GDtrain_9595de_9595vieObjects2= [];
gdjs.level2Code.GDtrain_9595de_9595vieObjects3= [];
gdjs.level2Code.GDtrain_9595de_9595vieObjects4= [];
gdjs.level2Code.GDtrain_9595de_9595vieObjects5= [];
gdjs.level2Code.GDclaudeObjects1= [];
gdjs.level2Code.GDclaudeObjects2= [];
gdjs.level2Code.GDclaudeObjects3= [];
gdjs.level2Code.GDclaudeObjects4= [];
gdjs.level2Code.GDclaudeObjects5= [];
gdjs.level2Code.GDcantalouObjects1= [];
gdjs.level2Code.GDcantalouObjects2= [];
gdjs.level2Code.GDcantalouObjects3= [];
gdjs.level2Code.GDcantalouObjects4= [];
gdjs.level2Code.GDcantalouObjects5= [];
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects1= [];
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects2= [];
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects3= [];
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects4= [];
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects5= [];
gdjs.level2Code.GDrep_95232reObjects1= [];
gdjs.level2Code.GDrep_95232reObjects2= [];
gdjs.level2Code.GDrep_95232reObjects3= [];
gdjs.level2Code.GDrep_95232reObjects4= [];
gdjs.level2Code.GDrep_95232reObjects5= [];
gdjs.level2Code.GDarbre2Objects1= [];
gdjs.level2Code.GDarbre2Objects2= [];
gdjs.level2Code.GDarbre2Objects3= [];
gdjs.level2Code.GDarbre2Objects4= [];
gdjs.level2Code.GDarbre2Objects5= [];
gdjs.level2Code.GDlamapadaireObjects1= [];
gdjs.level2Code.GDlamapadaireObjects2= [];
gdjs.level2Code.GDlamapadaireObjects3= [];
gdjs.level2Code.GDlamapadaireObjects4= [];
gdjs.level2Code.GDlamapadaireObjects5= [];
gdjs.level2Code.GDkiosqueObjects1= [];
gdjs.level2Code.GDkiosqueObjects2= [];
gdjs.level2Code.GDkiosqueObjects3= [];
gdjs.level2Code.GDkiosqueObjects4= [];
gdjs.level2Code.GDkiosqueObjects5= [];
gdjs.level2Code.GDarri_95232re_9595planObjects1= [];
gdjs.level2Code.GDarri_95232re_9595planObjects2= [];
gdjs.level2Code.GDarri_95232re_9595planObjects3= [];
gdjs.level2Code.GDarri_95232re_9595planObjects4= [];
gdjs.level2Code.GDarri_95232re_9595planObjects5= [];
gdjs.level2Code.GDsolObjects1= [];
gdjs.level2Code.GDsolObjects2= [];
gdjs.level2Code.GDsolObjects3= [];
gdjs.level2Code.GDsolObjects4= [];
gdjs.level2Code.GDsolObjects5= [];
gdjs.level2Code.GDarbusteObjects1= [];
gdjs.level2Code.GDarbusteObjects2= [];
gdjs.level2Code.GDarbusteObjects3= [];
gdjs.level2Code.GDarbusteObjects4= [];
gdjs.level2Code.GDarbusteObjects5= [];
gdjs.level2Code.GDobstacleObjects1= [];
gdjs.level2Code.GDobstacleObjects2= [];
gdjs.level2Code.GDobstacleObjects3= [];
gdjs.level2Code.GDobstacleObjects4= [];
gdjs.level2Code.GDobstacleObjects5= [];
gdjs.level2Code.GDlampadaireObjects1= [];
gdjs.level2Code.GDlampadaireObjects2= [];
gdjs.level2Code.GDlampadaireObjects3= [];
gdjs.level2Code.GDlampadaireObjects4= [];
gdjs.level2Code.GDlampadaireObjects5= [];
gdjs.level2Code.GDnuage2Objects1= [];
gdjs.level2Code.GDnuage2Objects2= [];
gdjs.level2Code.GDnuage2Objects3= [];
gdjs.level2Code.GDnuage2Objects4= [];
gdjs.level2Code.GDnuage2Objects5= [];
gdjs.level2Code.GDnuage3Objects1= [];
gdjs.level2Code.GDnuage3Objects2= [];
gdjs.level2Code.GDnuage3Objects3= [];
gdjs.level2Code.GDnuage3Objects4= [];
gdjs.level2Code.GDnuage3Objects5= [];
gdjs.level2Code.GDballonObjects1= [];
gdjs.level2Code.GDballonObjects2= [];
gdjs.level2Code.GDballonObjects3= [];
gdjs.level2Code.GDballonObjects4= [];
gdjs.level2Code.GDballonObjects5= [];
gdjs.level2Code.GDfondu_9595noirObjects1= [];
gdjs.level2Code.GDfondu_9595noirObjects2= [];
gdjs.level2Code.GDfondu_9595noirObjects3= [];
gdjs.level2Code.GDfondu_9595noirObjects4= [];
gdjs.level2Code.GDfondu_9595noirObjects5= [];


gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDNavMeshObjects1Objects = Hashtable.newFrom({"NavMesh": gdjs.level2Code.GDNavMeshObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDNavMeshObjects1Objects = Hashtable.newFrom({"NavMesh": gdjs.level2Code.GDNavMeshObjects1});
gdjs.level2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.level2Code.GDNavMeshObjects1 */
/* Reuse gdjs.level2Code.GDfabienObjects1 */
/* Reuse gdjs.level2Code.GDfigurantObjects1 */
{for(var i = 0, len = gdjs.level2Code.GDfabienObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDfabienObjects1[i].getBehavior("NavMeshPathfindingBehavior").SetDestination((gdjs.level2Code.GDfabienObjects1[i].getPointX("")), (gdjs.level2Code.GDfabienObjects1[i].getPointY("")), null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDfabienObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDfabienObjects1[i].getBehavior("NavMeshPathfindingBehavior").DrawNavMesh(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDNavMeshObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDfigurantObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDfigurantObjects1[i].getBehavior("NavMeshPathfindingBehavior").SetDestination(gdjs.randomInRange(100, 800), gdjs.randomInRange(100, 900), null);
}
}
}

}


};gdjs.level2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NavMesh"), gdjs.level2Code.GDNavMeshObjects1);
gdjs.copyArray(runtimeScene.getObjects("claude"), gdjs.level2Code.GDclaudeObjects1);
gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.level2Code.GDfabienObjects1);
gdjs.copyArray(runtimeScene.getObjects("figurant"), gdjs.level2Code.GDfigurantObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondu_noir"), gdjs.level2Code.GDfondu_9595noirObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.7, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.7, "fondu noir", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.7, "fond", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.7, "Obstacle", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.7, "UI", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.7, "décor", 0);
}
{for(var i = 0, len = gdjs.level2Code.GDfondu_9595noirObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDfondu_9595noirObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FonduNoirOut", 0, "linear", 3, true);
}
}
{for(var i = 0, len = gdjs.level2Code.GDfigurantObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDfigurantObjects1[i].getBehavior("NavMeshPathfindingBehavior").DrawNavMesh(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDNavMeshObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDclaudeObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDclaudeObjects1[i].activateBehavior("NavMeshPathfindingBehavior", false);
}
}
{for(var i = 0, len = gdjs.level2Code.GDfabienObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDfabienObjects1[i].activateBehavior("NavMeshPathfindingBehavior", false);
}
}
{for(var i = 0, len = gdjs.level2Code.GDfabienObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDfabienObjects1[i].activateBehavior("TopDownMovement", false);
}
}
{for(var i = 0, len = gdjs.level2Code.GDclaudeObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDclaudeObjects1[i].activateBehavior("TopDownMovement", false);
}
}

{ //Subevents
gdjs.level2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.level2Code.eventsList2 = function(runtimeScene) {

};gdjs.level2Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nuage"), gdjs.level2Code.GDnuageObjects2);

for (gdjs.level2Code.forEachIndex3 = 0;gdjs.level2Code.forEachIndex3 < gdjs.level2Code.GDnuageObjects2.length;++gdjs.level2Code.forEachIndex3) {
gdjs.level2Code.GDnuageObjects3.length = 0;


gdjs.level2Code.forEachTemporary3 = gdjs.level2Code.GDnuageObjects2[gdjs.level2Code.forEachIndex3];
gdjs.level2Code.GDnuageObjects3.push(gdjs.level2Code.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.level2Code.GDnuageObjects3.length ;i < len;++i) {
    gdjs.level2Code.GDnuageObjects3[i].getBehavior("EllipseMovement").SetRadiusX(-140, null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDnuageObjects3.length ;i < len;++i) {
    gdjs.level2Code.GDnuageObjects3[i].getBehavior("EllipseMovement").SetRadiusY(10, null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDnuageObjects3.length ;i < len;++i) {
    gdjs.level2Code.GDnuageObjects3[i].getBehavior("EllipseMovement").SetLoopDuration(115, null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDnuageObjects3.length ;i < len;++i) {
    gdjs.level2Code.GDnuageObjects3[i].getBehavior("EllipseMovement").SetMovementAngle(0, null);
}
}
}
}

}


};gdjs.level2Code.eventsList4 = function(runtimeScene) {

};gdjs.level2Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nuage2"), gdjs.level2Code.GDnuage2Objects2);

for (gdjs.level2Code.forEachIndex3 = 0;gdjs.level2Code.forEachIndex3 < gdjs.level2Code.GDnuage2Objects2.length;++gdjs.level2Code.forEachIndex3) {
gdjs.level2Code.GDnuage2Objects3.length = 0;


gdjs.level2Code.forEachTemporary3 = gdjs.level2Code.GDnuage2Objects2[gdjs.level2Code.forEachIndex3];
gdjs.level2Code.GDnuage2Objects3.push(gdjs.level2Code.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.level2Code.GDnuage2Objects3.length ;i < len;++i) {
    gdjs.level2Code.GDnuage2Objects3[i].getBehavior("EllipseMovement").SetRadiusX(160, null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDnuage2Objects3.length ;i < len;++i) {
    gdjs.level2Code.GDnuage2Objects3[i].getBehavior("EllipseMovement").SetRadiusY(15, null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDnuage2Objects3.length ;i < len;++i) {
    gdjs.level2Code.GDnuage2Objects3[i].getBehavior("EllipseMovement").SetLoopDuration(112, null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDnuage2Objects3.length ;i < len;++i) {
    gdjs.level2Code.GDnuage2Objects3[i].getBehavior("EllipseMovement").SetMovementAngle(0, null);
}
}
}
}

}


};gdjs.level2Code.eventsList6 = function(runtimeScene) {

};gdjs.level2Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nuage3"), gdjs.level2Code.GDnuage3Objects1);

for (gdjs.level2Code.forEachIndex2 = 0;gdjs.level2Code.forEachIndex2 < gdjs.level2Code.GDnuage3Objects1.length;++gdjs.level2Code.forEachIndex2) {
gdjs.level2Code.GDnuage3Objects2.length = 0;


gdjs.level2Code.forEachTemporary2 = gdjs.level2Code.GDnuage3Objects1[gdjs.level2Code.forEachIndex2];
gdjs.level2Code.GDnuage3Objects2.push(gdjs.level2Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.level2Code.GDnuage3Objects2.length ;i < len;++i) {
    gdjs.level2Code.GDnuage3Objects2[i].getBehavior("EllipseMovement").SetRadiusX(130, null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDnuage3Objects2.length ;i < len;++i) {
    gdjs.level2Code.GDnuage3Objects2[i].getBehavior("EllipseMovement").SetRadiusY(7, null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDnuage3Objects2.length ;i < len;++i) {
    gdjs.level2Code.GDnuage3Objects2[i].getBehavior("EllipseMovement").SetLoopDuration(190, null);
}
}
{for(var i = 0, len = gdjs.level2Code.GDnuage3Objects2.length ;i < len;++i) {
    gdjs.level2Code.GDnuage3Objects2[i].getBehavior("EllipseMovement").SetMovementAngle(0, null);
}
}
}
}

}


};gdjs.level2Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.level2Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.level2Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.level2Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDfabienObjects3Objects = Hashtable.newFrom({"fabien": gdjs.level2Code.GDfabienObjects3});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDlimite_95959595Z_95959595lampadaireObjects3Objects = Hashtable.newFrom({"limite_Z_lampadaire": gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects3});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDfabienObjects2Objects = Hashtable.newFrom({"fabien": gdjs.level2Code.GDfabienObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDlimite_95959595Z_95959595lampadaireObjects2Objects = Hashtable.newFrom({"limite_Z_lampadaire": gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects2});
gdjs.level2Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.level2Code.GDfabienObjects3);
gdjs.copyArray(runtimeScene.getObjects("limite_Z_lampadaire"), gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDfabienObjects3Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDlimite_95959595Z_95959595lampadaireObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lampadaire"), gdjs.level2Code.GDlampadaireObjects3);
{for(var i = 0, len = gdjs.level2Code.GDlampadaireObjects3.length ;i < len;++i) {
    gdjs.level2Code.GDlampadaireObjects3[i].setLayer("décor");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.level2Code.GDfabienObjects2);
gdjs.copyArray(runtimeScene.getObjects("limite_Z_lampadaire"), gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDfabienObjects2Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDlimite_95959595Z_95959595lampadaireObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lampadaire"), gdjs.level2Code.GDlampadaireObjects2);
{for(var i = 0, len = gdjs.level2Code.GDlampadaireObjects2.length ;i < len;++i) {
    gdjs.level2Code.GDlampadaireObjects2[i].setLayer("UI");
}
}
}

}


};gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDclaudeObjects2Objects = Hashtable.newFrom({"claude": gdjs.level2Code.GDclaudeObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDlimite_95959595Z_95959595lampadaireObjects2Objects = Hashtable.newFrom({"limite_Z_lampadaire": gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDclaudeObjects1Objects = Hashtable.newFrom({"claude": gdjs.level2Code.GDclaudeObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDlimite_95959595Z_95959595lampadaireObjects1Objects = Hashtable.newFrom({"limite_Z_lampadaire": gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects1});
gdjs.level2Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("claude"), gdjs.level2Code.GDclaudeObjects2);
gdjs.copyArray(runtimeScene.getObjects("limite_Z_lampadaire"), gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDclaudeObjects2Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDlimite_95959595Z_95959595lampadaireObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lampadaire"), gdjs.level2Code.GDlampadaireObjects2);
{for(var i = 0, len = gdjs.level2Code.GDlampadaireObjects2.length ;i < len;++i) {
    gdjs.level2Code.GDlampadaireObjects2[i].setLayer("décor");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("claude"), gdjs.level2Code.GDclaudeObjects1);
gdjs.copyArray(runtimeScene.getObjects("limite_Z_lampadaire"), gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDclaudeObjects1Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDlimite_95959595Z_95959595lampadaireObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lampadaire"), gdjs.level2Code.GDlampadaireObjects1);
{for(var i = 0, len = gdjs.level2Code.GDlampadaireObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDlampadaireObjects1[i].setLayer("UI");
}
}
}

}


};gdjs.level2Code.eventsList11 = function(runtimeScene) {

{


gdjs.level2Code.eventsList9(runtimeScene);
}


{


gdjs.level2Code.eventsList10(runtimeScene);
}


};gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDclaudeObjects3Objects = Hashtable.newFrom({"claude": gdjs.level2Code.GDclaudeObjects3});
gdjs.level2Code.asyncCallback29138772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("claude"), gdjs.level2Code.GDclaudeObjects5);

{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level2Code.GDclaudeObjects5.length !== 0 ? gdjs.level2Code.GDclaudeObjects5[0] : null), true, "décor", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "décor", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level2Code.GDclaudeObjects5.length !== 0 ? gdjs.level2Code.GDclaudeObjects5[0] : null), true, "fond", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "fond", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level2Code.GDclaudeObjects5.length !== 0 ? gdjs.level2Code.GDclaudeObjects5[0] : null), true, "UI", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "UI", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level2Code.GDclaudeObjects5.length !== 0 ? gdjs.level2Code.GDclaudeObjects5[0] : null), true, "Obstacle", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "Obstacle", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level2Code.GDclaudeObjects5.length !== 0 ? gdjs.level2Code.GDclaudeObjects5[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "", 0);
}
gdjs.level2Code.localVariables.length = 0;
}
gdjs.level2Code.idToCallbackMap.set(29138772, gdjs.level2Code.asyncCallback29138772);
gdjs.level2Code.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.level2Code.localVariables);
for (const obj of gdjs.level2Code.GDclaudeObjects4) asyncObjectsList.addObject("claude", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.level2Code.asyncCallback29138772(runtimeScene, asyncObjectsList)), 29138772, asyncObjectsList);
}
}

}


};gdjs.level2Code.eventsList13 = function(runtimeScene, asyncObjectsList) {

{

/* Reuse gdjs.level2Code.GDclaudeObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2Code.GDclaudeObjects4.length;i<l;++i) {
    if ( gdjs.level2Code.GDclaudeObjects4[i].behaviorActivated("NavMeshPathfindingBehavior") ) {
        isConditionTrue_0 = true;
        gdjs.level2Code.GDclaudeObjects4[k] = gdjs.level2Code.GDclaudeObjects4[i];
        ++k;
    }
}
gdjs.level2Code.GDclaudeObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level2Code.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.level2Code.asyncCallback29137796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("claude"), gdjs.level2Code.GDclaudeObjects4);

gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.level2Code.GDfabienObjects4);
{for(var i = 0, len = gdjs.level2Code.GDclaudeObjects4.length ;i < len;++i) {
    gdjs.level2Code.GDclaudeObjects4[i].activateBehavior("NavMeshPathfindingBehavior", true);
}
}
{for(var i = 0, len = gdjs.level2Code.GDfabienObjects4.length ;i < len;++i) {
    gdjs.level2Code.GDfabienObjects4[i].activateBehavior("NavMeshPathfindingBehavior", false);
}
}

{ //Subevents
gdjs.level2Code.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.level2Code.localVariables.length = 0;
}
gdjs.level2Code.idToCallbackMap.set(29137796, gdjs.level2Code.asyncCallback29137796);
gdjs.level2Code.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level2Code.localVariables);
for (const obj of gdjs.level2Code.GDclaudeObjects3) asyncObjectsList.addObject("claude", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.level2Code.asyncCallback29137796(runtimeScene, asyncObjectsList)), 29137796, asyncObjectsList);
}
}

}


};gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDfabienObjects2Objects = Hashtable.newFrom({"fabien": gdjs.level2Code.GDfabienObjects2});
gdjs.level2Code.asyncCallback29143044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("fabien"), gdjs.level2Code.GDfabienObjects4);

{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level2Code.GDfabienObjects4.length !== 0 ? gdjs.level2Code.GDfabienObjects4[0] : null), true, "décor", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "décor", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level2Code.GDfabienObjects4.length !== 0 ? gdjs.level2Code.GDfabienObjects4[0] : null), true, "fond", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "fond", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level2Code.GDfabienObjects4.length !== 0 ? gdjs.level2Code.GDfabienObjects4[0] : null), true, "UI", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "UI", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level2Code.GDfabienObjects4.length !== 0 ? gdjs.level2Code.GDfabienObjects4[0] : null), true, "Obstacle", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "Obstacle", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level2Code.GDfabienObjects4.length !== 0 ? gdjs.level2Code.GDfabienObjects4[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "", 0);
}
gdjs.level2Code.localVariables.length = 0;
}
gdjs.level2Code.idToCallbackMap.set(29143044, gdjs.level2Code.asyncCallback29143044);
gdjs.level2Code.eventsList15 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.level2Code.localVariables);
for (const obj of gdjs.level2Code.GDfabienObjects3) asyncObjectsList.addObject("fabien", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.level2Code.asyncCallback29143044(runtimeScene, asyncObjectsList)), 29143044, asyncObjectsList);
}
}

}


};gdjs.level2Code.eventsList16 = function(runtimeScene, asyncObjectsList) {

{

/* Reuse gdjs.level2Code.GDfabienObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2Code.GDfabienObjects3.length;i<l;++i) {
    if ( gdjs.level2Code.GDfabienObjects3[i].behaviorActivated("NavMeshPathfindingBehavior") ) {
        isConditionTrue_0 = true;
        gdjs.level2Code.GDfabienObjects3[k] = gdjs.level2Code.GDfabienObjects3[i];
        ++k;
    }
}
gdjs.level2Code.GDfabienObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level2Code.eventsList15(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.level2Code.asyncCallback29142052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level2Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("claude"), gdjs.level2Code.GDclaudeObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("fabien"), gdjs.level2Code.GDfabienObjects3);

{for(var i = 0, len = gdjs.level2Code.GDfabienObjects3.length ;i < len;++i) {
    gdjs.level2Code.GDfabienObjects3[i].activateBehavior("NavMeshPathfindingBehavior", true);
}
}
{for(var i = 0, len = gdjs.level2Code.GDclaudeObjects3.length ;i < len;++i) {
    gdjs.level2Code.GDclaudeObjects3[i].activateBehavior("NavMeshPathfindingBehavior", false);
}
}

{ //Subevents
gdjs.level2Code.eventsList16(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.level2Code.localVariables.length = 0;
}
gdjs.level2Code.idToCallbackMap.set(29142052, gdjs.level2Code.asyncCallback29142052);
gdjs.level2Code.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level2Code.localVariables);
for (const obj of gdjs.level2Code.GDfabienObjects2) asyncObjectsList.addObject("fabien", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.level2Code.asyncCallback29142052(runtimeScene, asyncObjectsList)), 29142052, asyncObjectsList);
}
}

}


};gdjs.level2Code.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("claude"), gdjs.level2Code.GDclaudeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDclaudeObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.level2Code.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.level2Code.GDfabienObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDfabienObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.level2Code.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.level2Code.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.level2Code.GDclaudeObjects3, gdjs.level2Code.GDclaudeObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - (( gdjs.level2Code.GDclaudeObjects4.length === 0 ) ? 0 :gdjs.level2Code.GDclaudeObjects4[0].getPointX(""))) > Math.abs(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - (( gdjs.level2Code.GDclaudeObjects4.length === 0 ) ? 0 :gdjs.level2Code.GDclaudeObjects4[0].getPointY(""))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDclaudeObjects4 */
{for(var i = 0, len = gdjs.level2Code.GDclaudeObjects4.length ;i < len;++i) {
    gdjs.level2Code.GDclaudeObjects4[i].getBehavior("NavMeshPathfindingBehavior").SetDestination(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), (gdjs.level2Code.GDclaudeObjects4[i].getPointY("")), null);
}
}
}

}


{

/* Reuse gdjs.level2Code.GDclaudeObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - (( gdjs.level2Code.GDclaudeObjects3.length === 0 ) ? 0 :gdjs.level2Code.GDclaudeObjects3[0].getPointX(""))) < Math.abs(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - (( gdjs.level2Code.GDclaudeObjects3.length === 0 ) ? 0 :gdjs.level2Code.GDclaudeObjects3[0].getPointY(""))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDclaudeObjects3 */
{for(var i = 0, len = gdjs.level2Code.GDclaudeObjects3.length ;i < len;++i) {
    gdjs.level2Code.GDclaudeObjects3[i].getBehavior("NavMeshPathfindingBehavior").SetDestination((gdjs.level2Code.GDclaudeObjects3[i].getPointX("")), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), null);
}
}
}

}


};gdjs.level2Code.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.level2Code.GDfabienObjects3, gdjs.level2Code.GDfabienObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - (( gdjs.level2Code.GDfabienObjects4.length === 0 ) ? 0 :gdjs.level2Code.GDfabienObjects4[0].getPointX(""))) > Math.abs(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - (( gdjs.level2Code.GDfabienObjects4.length === 0 ) ? 0 :gdjs.level2Code.GDfabienObjects4[0].getPointY(""))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDfabienObjects4 */
{for(var i = 0, len = gdjs.level2Code.GDfabienObjects4.length ;i < len;++i) {
    gdjs.level2Code.GDfabienObjects4[i].getBehavior("NavMeshPathfindingBehavior").SetDestination(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), (gdjs.level2Code.GDfabienObjects4[i].getPointY("")), null);
}
}
}

}


{

/* Reuse gdjs.level2Code.GDfabienObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - (( gdjs.level2Code.GDfabienObjects3.length === 0 ) ? 0 :gdjs.level2Code.GDfabienObjects3[0].getPointX(""))) < Math.abs(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - (( gdjs.level2Code.GDfabienObjects3.length === 0 ) ? 0 :gdjs.level2Code.GDfabienObjects3[0].getPointY(""))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDfabienObjects3 */
{for(var i = 0, len = gdjs.level2Code.GDfabienObjects3.length ;i < len;++i) {
    gdjs.level2Code.GDfabienObjects3[i].getBehavior("NavMeshPathfindingBehavior").SetDestination((gdjs.level2Code.GDfabienObjects3[i].getPointX("")), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), null);
}
}
}

}


};gdjs.level2Code.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("claude"), gdjs.level2Code.GDclaudeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2Code.GDclaudeObjects3.length;i<l;++i) {
    if ( gdjs.level2Code.GDclaudeObjects3[i].behaviorActivated("NavMeshPathfindingBehavior") ) {
        isConditionTrue_0 = true;
        gdjs.level2Code.GDclaudeObjects3[k] = gdjs.level2Code.GDclaudeObjects3[i];
        ++k;
    }
}
gdjs.level2Code.GDclaudeObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.level2Code.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.level2Code.GDfabienObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2Code.GDfabienObjects3.length;i<l;++i) {
    if ( gdjs.level2Code.GDfabienObjects3[i].behaviorActivated("NavMeshPathfindingBehavior") ) {
        isConditionTrue_0 = true;
        gdjs.level2Code.GDfabienObjects3[k] = gdjs.level2Code.GDfabienObjects3[i];
        ++k;
    }
}
gdjs.level2Code.GDfabienObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.level2Code.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDfabienObjects2Objects = Hashtable.newFrom({"fabien": gdjs.level2Code.GDfabienObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDclaudeObjects2Objects = Hashtable.newFrom({"claude": gdjs.level2Code.GDclaudeObjects2});
gdjs.level2Code.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("claude"), gdjs.level2Code.GDclaudeObjects2);
gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.level2Code.GDfabienObjects2);
{gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.func(runtimeScene, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDfabienObjects2Objects, "NavMeshPathfindingBehavior", "TopDownMovement", "TopDownMovementAnimator", "NavMeshPathfindingAnimator", null);
}
{gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.func(runtimeScene, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDclaudeObjects2Objects, "NavMeshPathfindingBehavior", "TopDownMovement", "TopDownMovementAnimator", "NavMeshPathfindingAnimator", null);
}
}

}


};gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDfabienObjects2Objects = Hashtable.newFrom({"fabien": gdjs.level2Code.GDfabienObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDobstacleObjects2Objects = Hashtable.newFrom({"obstacle": gdjs.level2Code.GDobstacleObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDobstacleObjects2Objects = Hashtable.newFrom({"obstacle": gdjs.level2Code.GDobstacleObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDfabienObjects2Objects = Hashtable.newFrom({"fabien": gdjs.level2Code.GDfabienObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDkiosqueObjects2Objects = Hashtable.newFrom({"kiosque": gdjs.level2Code.GDkiosqueObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDkiosqueObjects2Objects = Hashtable.newFrom({"kiosque": gdjs.level2Code.GDkiosqueObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDclaudeObjects2Objects = Hashtable.newFrom({"claude": gdjs.level2Code.GDclaudeObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDobstacleObjects2Objects = Hashtable.newFrom({"obstacle": gdjs.level2Code.GDobstacleObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDobstacleObjects2Objects = Hashtable.newFrom({"obstacle": gdjs.level2Code.GDobstacleObjects2});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDclaudeObjects1Objects = Hashtable.newFrom({"claude": gdjs.level2Code.GDclaudeObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDkiosqueObjects1Objects = Hashtable.newFrom({"kiosque": gdjs.level2Code.GDkiosqueObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDkiosqueObjects1Objects = Hashtable.newFrom({"kiosque": gdjs.level2Code.GDkiosqueObjects1});
gdjs.level2Code.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.level2Code.GDfabienObjects2);
gdjs.copyArray(runtimeScene.getObjects("obstacle"), gdjs.level2Code.GDobstacleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDfabienObjects2Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDobstacleObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDfabienObjects2 */
/* Reuse gdjs.level2Code.GDobstacleObjects2 */
{for(var i = 0, len = gdjs.level2Code.GDfabienObjects2.length ;i < len;++i) {
    gdjs.level2Code.GDfabienObjects2[i].separateFromObjectsList(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDobstacleObjects2Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fabien"), gdjs.level2Code.GDfabienObjects2);
gdjs.copyArray(runtimeScene.getObjects("kiosque"), gdjs.level2Code.GDkiosqueObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDfabienObjects2Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDkiosqueObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDfabienObjects2 */
/* Reuse gdjs.level2Code.GDkiosqueObjects2 */
{for(var i = 0, len = gdjs.level2Code.GDfabienObjects2.length ;i < len;++i) {
    gdjs.level2Code.GDfabienObjects2[i].separateFromObjectsList(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDkiosqueObjects2Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("claude"), gdjs.level2Code.GDclaudeObjects2);
gdjs.copyArray(runtimeScene.getObjects("obstacle"), gdjs.level2Code.GDobstacleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDclaudeObjects2Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDobstacleObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDclaudeObjects2 */
/* Reuse gdjs.level2Code.GDobstacleObjects2 */
{for(var i = 0, len = gdjs.level2Code.GDclaudeObjects2.length ;i < len;++i) {
    gdjs.level2Code.GDclaudeObjects2[i].separateFromObjectsList(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDobstacleObjects2Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("claude"), gdjs.level2Code.GDclaudeObjects1);
gdjs.copyArray(runtimeScene.getObjects("kiosque"), gdjs.level2Code.GDkiosqueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDclaudeObjects1Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDkiosqueObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDclaudeObjects1 */
/* Reuse gdjs.level2Code.GDkiosqueObjects1 */
{for(var i = 0, len = gdjs.level2Code.GDclaudeObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDclaudeObjects1[i].separateFromObjectsList(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDkiosqueObjects1Objects, false);
}
}
}

}


};gdjs.level2Code.eventsList24 = function(runtimeScene) {

{


gdjs.level2Code.eventsList18(runtimeScene);
}


{


gdjs.level2Code.eventsList21(runtimeScene);
}


{


gdjs.level2Code.eventsList22(runtimeScene);
}


{


gdjs.level2Code.eventsList23(runtimeScene);
}


};gdjs.level2Code.eventsList25 = function(runtimeScene) {

};gdjs.level2Code.eventsList26 = function(runtimeScene) {

{


gdjs.level2Code.eventsList1(runtimeScene);
}


{


gdjs.level2Code.eventsList8(runtimeScene);
}


{


gdjs.level2Code.eventsList11(runtimeScene);
}


{


gdjs.level2Code.eventsList24(runtimeScene);
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


{


gdjs.level2Code.eventsList25(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level2Code.GDfabienObjects1.length = 0;
gdjs.level2Code.GDfabienObjects2.length = 0;
gdjs.level2Code.GDfabienObjects3.length = 0;
gdjs.level2Code.GDfabienObjects4.length = 0;
gdjs.level2Code.GDfabienObjects5.length = 0;
gdjs.level2Code.GDBatObjects1.length = 0;
gdjs.level2Code.GDBatObjects2.length = 0;
gdjs.level2Code.GDBatObjects3.length = 0;
gdjs.level2Code.GDBatObjects4.length = 0;
gdjs.level2Code.GDBatObjects5.length = 0;
gdjs.level2Code.GDFloorObjects1.length = 0;
gdjs.level2Code.GDFloorObjects2.length = 0;
gdjs.level2Code.GDFloorObjects3.length = 0;
gdjs.level2Code.GDFloorObjects4.length = 0;
gdjs.level2Code.GDFloorObjects5.length = 0;
gdjs.level2Code.GDTreeObjects1.length = 0;
gdjs.level2Code.GDTreeObjects2.length = 0;
gdjs.level2Code.GDTreeObjects3.length = 0;
gdjs.level2Code.GDTreeObjects4.length = 0;
gdjs.level2Code.GDTreeObjects5.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects1.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects2.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects3.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects4.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects5.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects1.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects2.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects3.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects4.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects5.length = 0;
gdjs.level2Code.GDTileObstacleObjects1.length = 0;
gdjs.level2Code.GDTileObstacleObjects2.length = 0;
gdjs.level2Code.GDTileObstacleObjects3.length = 0;
gdjs.level2Code.GDTileObstacleObjects4.length = 0;
gdjs.level2Code.GDTileObstacleObjects5.length = 0;
gdjs.level2Code.GDNavMeshObjects1.length = 0;
gdjs.level2Code.GDNavMeshObjects2.length = 0;
gdjs.level2Code.GDNavMeshObjects3.length = 0;
gdjs.level2Code.GDNavMeshObjects4.length = 0;
gdjs.level2Code.GDNavMeshObjects5.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects1.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects2.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects3.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects4.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects5.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects1.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects2.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects3.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects4.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects5.length = 0;
gdjs.level2Code.GDmapObjects1.length = 0;
gdjs.level2Code.GDmapObjects2.length = 0;
gdjs.level2Code.GDmapObjects3.length = 0;
gdjs.level2Code.GDmapObjects4.length = 0;
gdjs.level2Code.GDmapObjects5.length = 0;
gdjs.level2Code.GDfigurantObjects1.length = 0;
gdjs.level2Code.GDfigurantObjects2.length = 0;
gdjs.level2Code.GDfigurantObjects3.length = 0;
gdjs.level2Code.GDfigurantObjects4.length = 0;
gdjs.level2Code.GDfigurantObjects5.length = 0;
gdjs.level2Code.GDskyObjects1.length = 0;
gdjs.level2Code.GDskyObjects2.length = 0;
gdjs.level2Code.GDskyObjects3.length = 0;
gdjs.level2Code.GDskyObjects4.length = 0;
gdjs.level2Code.GDskyObjects5.length = 0;
gdjs.level2Code.GDnuageObjects1.length = 0;
gdjs.level2Code.GDnuageObjects2.length = 0;
gdjs.level2Code.GDnuageObjects3.length = 0;
gdjs.level2Code.GDnuageObjects4.length = 0;
gdjs.level2Code.GDnuageObjects5.length = 0;
gdjs.level2Code.GDnuage_95952Objects1.length = 0;
gdjs.level2Code.GDnuage_95952Objects2.length = 0;
gdjs.level2Code.GDnuage_95952Objects3.length = 0;
gdjs.level2Code.GDnuage_95952Objects4.length = 0;
gdjs.level2Code.GDnuage_95952Objects5.length = 0;
gdjs.level2Code.GDpjetteObjects1.length = 0;
gdjs.level2Code.GDpjetteObjects2.length = 0;
gdjs.level2Code.GDpjetteObjects3.length = 0;
gdjs.level2Code.GDpjetteObjects4.length = 0;
gdjs.level2Code.GDpjetteObjects5.length = 0;
gdjs.level2Code.GDtrottoirObjects1.length = 0;
gdjs.level2Code.GDtrottoirObjects2.length = 0;
gdjs.level2Code.GDtrottoirObjects3.length = 0;
gdjs.level2Code.GDtrottoirObjects4.length = 0;
gdjs.level2Code.GDtrottoirObjects5.length = 0;
gdjs.level2Code.GDtrottoir_9595rondObjects1.length = 0;
gdjs.level2Code.GDtrottoir_9595rondObjects2.length = 0;
gdjs.level2Code.GDtrottoir_9595rondObjects3.length = 0;
gdjs.level2Code.GDtrottoir_9595rondObjects4.length = 0;
gdjs.level2Code.GDtrottoir_9595rondObjects5.length = 0;
gdjs.level2Code.GDpassage_9595pietonObjects1.length = 0;
gdjs.level2Code.GDpassage_9595pietonObjects2.length = 0;
gdjs.level2Code.GDpassage_9595pietonObjects3.length = 0;
gdjs.level2Code.GDpassage_9595pietonObjects4.length = 0;
gdjs.level2Code.GDpassage_9595pietonObjects5.length = 0;
gdjs.level2Code.GDarbreObjects1.length = 0;
gdjs.level2Code.GDarbreObjects2.length = 0;
gdjs.level2Code.GDarbreObjects3.length = 0;
gdjs.level2Code.GDarbreObjects4.length = 0;
gdjs.level2Code.GDarbreObjects5.length = 0;
gdjs.level2Code.GDtrottoir_9595bordObjects1.length = 0;
gdjs.level2Code.GDtrottoir_9595bordObjects2.length = 0;
gdjs.level2Code.GDtrottoir_9595bordObjects3.length = 0;
gdjs.level2Code.GDtrottoir_9595bordObjects4.length = 0;
gdjs.level2Code.GDtrottoir_9595bordObjects5.length = 0;
gdjs.level2Code.GDbancObjects1.length = 0;
gdjs.level2Code.GDbancObjects2.length = 0;
gdjs.level2Code.GDbancObjects3.length = 0;
gdjs.level2Code.GDbancObjects4.length = 0;
gdjs.level2Code.GDbancObjects5.length = 0;
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects1.length = 0;
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects2.length = 0;
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects3.length = 0;
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects4.length = 0;
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects5.length = 0;
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects1.length = 0;
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects2.length = 0;
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects3.length = 0;
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects4.length = 0;
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects5.length = 0;
gdjs.level2Code.GDvoiture_9595rougeObjects1.length = 0;
gdjs.level2Code.GDvoiture_9595rougeObjects2.length = 0;
gdjs.level2Code.GDvoiture_9595rougeObjects3.length = 0;
gdjs.level2Code.GDvoiture_9595rougeObjects4.length = 0;
gdjs.level2Code.GDvoiture_9595rougeObjects5.length = 0;
gdjs.level2Code.GDrouteObjects1.length = 0;
gdjs.level2Code.GDrouteObjects2.length = 0;
gdjs.level2Code.GDrouteObjects3.length = 0;
gdjs.level2Code.GDrouteObjects4.length = 0;
gdjs.level2Code.GDrouteObjects5.length = 0;
gdjs.level2Code.GDroute_9595bande_9595blancheObjects1.length = 0;
gdjs.level2Code.GDroute_9595bande_9595blancheObjects2.length = 0;
gdjs.level2Code.GDroute_9595bande_9595blancheObjects3.length = 0;
gdjs.level2Code.GDroute_9595bande_9595blancheObjects4.length = 0;
gdjs.level2Code.GDroute_9595bande_9595blancheObjects5.length = 0;
gdjs.level2Code.GDmetroObjects1.length = 0;
gdjs.level2Code.GDmetroObjects2.length = 0;
gdjs.level2Code.GDmetroObjects3.length = 0;
gdjs.level2Code.GDmetroObjects4.length = 0;
gdjs.level2Code.GDmetroObjects5.length = 0;
gdjs.level2Code.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.level2Code.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.level2Code.GDtrain_9595de_9595vieObjects3.length = 0;
gdjs.level2Code.GDtrain_9595de_9595vieObjects4.length = 0;
gdjs.level2Code.GDtrain_9595de_9595vieObjects5.length = 0;
gdjs.level2Code.GDclaudeObjects1.length = 0;
gdjs.level2Code.GDclaudeObjects2.length = 0;
gdjs.level2Code.GDclaudeObjects3.length = 0;
gdjs.level2Code.GDclaudeObjects4.length = 0;
gdjs.level2Code.GDclaudeObjects5.length = 0;
gdjs.level2Code.GDcantalouObjects1.length = 0;
gdjs.level2Code.GDcantalouObjects2.length = 0;
gdjs.level2Code.GDcantalouObjects3.length = 0;
gdjs.level2Code.GDcantalouObjects4.length = 0;
gdjs.level2Code.GDcantalouObjects5.length = 0;
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects1.length = 0;
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects2.length = 0;
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects3.length = 0;
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects4.length = 0;
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects5.length = 0;
gdjs.level2Code.GDrep_95232reObjects1.length = 0;
gdjs.level2Code.GDrep_95232reObjects2.length = 0;
gdjs.level2Code.GDrep_95232reObjects3.length = 0;
gdjs.level2Code.GDrep_95232reObjects4.length = 0;
gdjs.level2Code.GDrep_95232reObjects5.length = 0;
gdjs.level2Code.GDarbre2Objects1.length = 0;
gdjs.level2Code.GDarbre2Objects2.length = 0;
gdjs.level2Code.GDarbre2Objects3.length = 0;
gdjs.level2Code.GDarbre2Objects4.length = 0;
gdjs.level2Code.GDarbre2Objects5.length = 0;
gdjs.level2Code.GDlamapadaireObjects1.length = 0;
gdjs.level2Code.GDlamapadaireObjects2.length = 0;
gdjs.level2Code.GDlamapadaireObjects3.length = 0;
gdjs.level2Code.GDlamapadaireObjects4.length = 0;
gdjs.level2Code.GDlamapadaireObjects5.length = 0;
gdjs.level2Code.GDkiosqueObjects1.length = 0;
gdjs.level2Code.GDkiosqueObjects2.length = 0;
gdjs.level2Code.GDkiosqueObjects3.length = 0;
gdjs.level2Code.GDkiosqueObjects4.length = 0;
gdjs.level2Code.GDkiosqueObjects5.length = 0;
gdjs.level2Code.GDarri_95232re_9595planObjects1.length = 0;
gdjs.level2Code.GDarri_95232re_9595planObjects2.length = 0;
gdjs.level2Code.GDarri_95232re_9595planObjects3.length = 0;
gdjs.level2Code.GDarri_95232re_9595planObjects4.length = 0;
gdjs.level2Code.GDarri_95232re_9595planObjects5.length = 0;
gdjs.level2Code.GDsolObjects1.length = 0;
gdjs.level2Code.GDsolObjects2.length = 0;
gdjs.level2Code.GDsolObjects3.length = 0;
gdjs.level2Code.GDsolObjects4.length = 0;
gdjs.level2Code.GDsolObjects5.length = 0;
gdjs.level2Code.GDarbusteObjects1.length = 0;
gdjs.level2Code.GDarbusteObjects2.length = 0;
gdjs.level2Code.GDarbusteObjects3.length = 0;
gdjs.level2Code.GDarbusteObjects4.length = 0;
gdjs.level2Code.GDarbusteObjects5.length = 0;
gdjs.level2Code.GDobstacleObjects1.length = 0;
gdjs.level2Code.GDobstacleObjects2.length = 0;
gdjs.level2Code.GDobstacleObjects3.length = 0;
gdjs.level2Code.GDobstacleObjects4.length = 0;
gdjs.level2Code.GDobstacleObjects5.length = 0;
gdjs.level2Code.GDlampadaireObjects1.length = 0;
gdjs.level2Code.GDlampadaireObjects2.length = 0;
gdjs.level2Code.GDlampadaireObjects3.length = 0;
gdjs.level2Code.GDlampadaireObjects4.length = 0;
gdjs.level2Code.GDlampadaireObjects5.length = 0;
gdjs.level2Code.GDnuage2Objects1.length = 0;
gdjs.level2Code.GDnuage2Objects2.length = 0;
gdjs.level2Code.GDnuage2Objects3.length = 0;
gdjs.level2Code.GDnuage2Objects4.length = 0;
gdjs.level2Code.GDnuage2Objects5.length = 0;
gdjs.level2Code.GDnuage3Objects1.length = 0;
gdjs.level2Code.GDnuage3Objects2.length = 0;
gdjs.level2Code.GDnuage3Objects3.length = 0;
gdjs.level2Code.GDnuage3Objects4.length = 0;
gdjs.level2Code.GDnuage3Objects5.length = 0;
gdjs.level2Code.GDballonObjects1.length = 0;
gdjs.level2Code.GDballonObjects2.length = 0;
gdjs.level2Code.GDballonObjects3.length = 0;
gdjs.level2Code.GDballonObjects4.length = 0;
gdjs.level2Code.GDballonObjects5.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects1.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects2.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects3.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects4.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects5.length = 0;

gdjs.level2Code.eventsList26(runtimeScene);
gdjs.level2Code.GDfabienObjects1.length = 0;
gdjs.level2Code.GDfabienObjects2.length = 0;
gdjs.level2Code.GDfabienObjects3.length = 0;
gdjs.level2Code.GDfabienObjects4.length = 0;
gdjs.level2Code.GDfabienObjects5.length = 0;
gdjs.level2Code.GDBatObjects1.length = 0;
gdjs.level2Code.GDBatObjects2.length = 0;
gdjs.level2Code.GDBatObjects3.length = 0;
gdjs.level2Code.GDBatObjects4.length = 0;
gdjs.level2Code.GDBatObjects5.length = 0;
gdjs.level2Code.GDFloorObjects1.length = 0;
gdjs.level2Code.GDFloorObjects2.length = 0;
gdjs.level2Code.GDFloorObjects3.length = 0;
gdjs.level2Code.GDFloorObjects4.length = 0;
gdjs.level2Code.GDFloorObjects5.length = 0;
gdjs.level2Code.GDTreeObjects1.length = 0;
gdjs.level2Code.GDTreeObjects2.length = 0;
gdjs.level2Code.GDTreeObjects3.length = 0;
gdjs.level2Code.GDTreeObjects4.length = 0;
gdjs.level2Code.GDTreeObjects5.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects1.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects2.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects3.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects4.length = 0;
gdjs.level2Code.GDTileRowObstacleObjects5.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects1.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects2.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects3.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects4.length = 0;
gdjs.level2Code.GDTileColumnObstacleObjects5.length = 0;
gdjs.level2Code.GDTileObstacleObjects1.length = 0;
gdjs.level2Code.GDTileObstacleObjects2.length = 0;
gdjs.level2Code.GDTileObstacleObjects3.length = 0;
gdjs.level2Code.GDTileObstacleObjects4.length = 0;
gdjs.level2Code.GDTileObstacleObjects5.length = 0;
gdjs.level2Code.GDNavMeshObjects1.length = 0;
gdjs.level2Code.GDNavMeshObjects2.length = 0;
gdjs.level2Code.GDNavMeshObjects3.length = 0;
gdjs.level2Code.GDNavMeshObjects4.length = 0;
gdjs.level2Code.GDNavMeshObjects5.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects1.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects2.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects3.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects4.length = 0;
gdjs.level2Code.GDWeatherDebugTextObjects5.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects1.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects2.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects3.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects4.length = 0;
gdjs.level2Code.GDHeatDisplacementTextureObjects5.length = 0;
gdjs.level2Code.GDmapObjects1.length = 0;
gdjs.level2Code.GDmapObjects2.length = 0;
gdjs.level2Code.GDmapObjects3.length = 0;
gdjs.level2Code.GDmapObjects4.length = 0;
gdjs.level2Code.GDmapObjects5.length = 0;
gdjs.level2Code.GDfigurantObjects1.length = 0;
gdjs.level2Code.GDfigurantObjects2.length = 0;
gdjs.level2Code.GDfigurantObjects3.length = 0;
gdjs.level2Code.GDfigurantObjects4.length = 0;
gdjs.level2Code.GDfigurantObjects5.length = 0;
gdjs.level2Code.GDskyObjects1.length = 0;
gdjs.level2Code.GDskyObjects2.length = 0;
gdjs.level2Code.GDskyObjects3.length = 0;
gdjs.level2Code.GDskyObjects4.length = 0;
gdjs.level2Code.GDskyObjects5.length = 0;
gdjs.level2Code.GDnuageObjects1.length = 0;
gdjs.level2Code.GDnuageObjects2.length = 0;
gdjs.level2Code.GDnuageObjects3.length = 0;
gdjs.level2Code.GDnuageObjects4.length = 0;
gdjs.level2Code.GDnuageObjects5.length = 0;
gdjs.level2Code.GDnuage_95952Objects1.length = 0;
gdjs.level2Code.GDnuage_95952Objects2.length = 0;
gdjs.level2Code.GDnuage_95952Objects3.length = 0;
gdjs.level2Code.GDnuage_95952Objects4.length = 0;
gdjs.level2Code.GDnuage_95952Objects5.length = 0;
gdjs.level2Code.GDpjetteObjects1.length = 0;
gdjs.level2Code.GDpjetteObjects2.length = 0;
gdjs.level2Code.GDpjetteObjects3.length = 0;
gdjs.level2Code.GDpjetteObjects4.length = 0;
gdjs.level2Code.GDpjetteObjects5.length = 0;
gdjs.level2Code.GDtrottoirObjects1.length = 0;
gdjs.level2Code.GDtrottoirObjects2.length = 0;
gdjs.level2Code.GDtrottoirObjects3.length = 0;
gdjs.level2Code.GDtrottoirObjects4.length = 0;
gdjs.level2Code.GDtrottoirObjects5.length = 0;
gdjs.level2Code.GDtrottoir_9595rondObjects1.length = 0;
gdjs.level2Code.GDtrottoir_9595rondObjects2.length = 0;
gdjs.level2Code.GDtrottoir_9595rondObjects3.length = 0;
gdjs.level2Code.GDtrottoir_9595rondObjects4.length = 0;
gdjs.level2Code.GDtrottoir_9595rondObjects5.length = 0;
gdjs.level2Code.GDpassage_9595pietonObjects1.length = 0;
gdjs.level2Code.GDpassage_9595pietonObjects2.length = 0;
gdjs.level2Code.GDpassage_9595pietonObjects3.length = 0;
gdjs.level2Code.GDpassage_9595pietonObjects4.length = 0;
gdjs.level2Code.GDpassage_9595pietonObjects5.length = 0;
gdjs.level2Code.GDarbreObjects1.length = 0;
gdjs.level2Code.GDarbreObjects2.length = 0;
gdjs.level2Code.GDarbreObjects3.length = 0;
gdjs.level2Code.GDarbreObjects4.length = 0;
gdjs.level2Code.GDarbreObjects5.length = 0;
gdjs.level2Code.GDtrottoir_9595bordObjects1.length = 0;
gdjs.level2Code.GDtrottoir_9595bordObjects2.length = 0;
gdjs.level2Code.GDtrottoir_9595bordObjects3.length = 0;
gdjs.level2Code.GDtrottoir_9595bordObjects4.length = 0;
gdjs.level2Code.GDtrottoir_9595bordObjects5.length = 0;
gdjs.level2Code.GDbancObjects1.length = 0;
gdjs.level2Code.GDbancObjects2.length = 0;
gdjs.level2Code.GDbancObjects3.length = 0;
gdjs.level2Code.GDbancObjects4.length = 0;
gdjs.level2Code.GDbancObjects5.length = 0;
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects1.length = 0;
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects2.length = 0;
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects3.length = 0;
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects4.length = 0;
gdjs.level2Code.GDfeu_9595tricolore_9595faceObjects5.length = 0;
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects1.length = 0;
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects2.length = 0;
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects3.length = 0;
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects4.length = 0;
gdjs.level2Code.GDpetite_9595mamie_9595et_9595son_9595chienObjects5.length = 0;
gdjs.level2Code.GDvoiture_9595rougeObjects1.length = 0;
gdjs.level2Code.GDvoiture_9595rougeObjects2.length = 0;
gdjs.level2Code.GDvoiture_9595rougeObjects3.length = 0;
gdjs.level2Code.GDvoiture_9595rougeObjects4.length = 0;
gdjs.level2Code.GDvoiture_9595rougeObjects5.length = 0;
gdjs.level2Code.GDrouteObjects1.length = 0;
gdjs.level2Code.GDrouteObjects2.length = 0;
gdjs.level2Code.GDrouteObjects3.length = 0;
gdjs.level2Code.GDrouteObjects4.length = 0;
gdjs.level2Code.GDrouteObjects5.length = 0;
gdjs.level2Code.GDroute_9595bande_9595blancheObjects1.length = 0;
gdjs.level2Code.GDroute_9595bande_9595blancheObjects2.length = 0;
gdjs.level2Code.GDroute_9595bande_9595blancheObjects3.length = 0;
gdjs.level2Code.GDroute_9595bande_9595blancheObjects4.length = 0;
gdjs.level2Code.GDroute_9595bande_9595blancheObjects5.length = 0;
gdjs.level2Code.GDmetroObjects1.length = 0;
gdjs.level2Code.GDmetroObjects2.length = 0;
gdjs.level2Code.GDmetroObjects3.length = 0;
gdjs.level2Code.GDmetroObjects4.length = 0;
gdjs.level2Code.GDmetroObjects5.length = 0;
gdjs.level2Code.GDtrain_9595de_9595vieObjects1.length = 0;
gdjs.level2Code.GDtrain_9595de_9595vieObjects2.length = 0;
gdjs.level2Code.GDtrain_9595de_9595vieObjects3.length = 0;
gdjs.level2Code.GDtrain_9595de_9595vieObjects4.length = 0;
gdjs.level2Code.GDtrain_9595de_9595vieObjects5.length = 0;
gdjs.level2Code.GDclaudeObjects1.length = 0;
gdjs.level2Code.GDclaudeObjects2.length = 0;
gdjs.level2Code.GDclaudeObjects3.length = 0;
gdjs.level2Code.GDclaudeObjects4.length = 0;
gdjs.level2Code.GDclaudeObjects5.length = 0;
gdjs.level2Code.GDcantalouObjects1.length = 0;
gdjs.level2Code.GDcantalouObjects2.length = 0;
gdjs.level2Code.GDcantalouObjects3.length = 0;
gdjs.level2Code.GDcantalouObjects4.length = 0;
gdjs.level2Code.GDcantalouObjects5.length = 0;
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects1.length = 0;
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects2.length = 0;
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects3.length = 0;
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects4.length = 0;
gdjs.level2Code.GDlimite_9595Z_9595lampadaireObjects5.length = 0;
gdjs.level2Code.GDrep_95232reObjects1.length = 0;
gdjs.level2Code.GDrep_95232reObjects2.length = 0;
gdjs.level2Code.GDrep_95232reObjects3.length = 0;
gdjs.level2Code.GDrep_95232reObjects4.length = 0;
gdjs.level2Code.GDrep_95232reObjects5.length = 0;
gdjs.level2Code.GDarbre2Objects1.length = 0;
gdjs.level2Code.GDarbre2Objects2.length = 0;
gdjs.level2Code.GDarbre2Objects3.length = 0;
gdjs.level2Code.GDarbre2Objects4.length = 0;
gdjs.level2Code.GDarbre2Objects5.length = 0;
gdjs.level2Code.GDlamapadaireObjects1.length = 0;
gdjs.level2Code.GDlamapadaireObjects2.length = 0;
gdjs.level2Code.GDlamapadaireObjects3.length = 0;
gdjs.level2Code.GDlamapadaireObjects4.length = 0;
gdjs.level2Code.GDlamapadaireObjects5.length = 0;
gdjs.level2Code.GDkiosqueObjects1.length = 0;
gdjs.level2Code.GDkiosqueObjects2.length = 0;
gdjs.level2Code.GDkiosqueObjects3.length = 0;
gdjs.level2Code.GDkiosqueObjects4.length = 0;
gdjs.level2Code.GDkiosqueObjects5.length = 0;
gdjs.level2Code.GDarri_95232re_9595planObjects1.length = 0;
gdjs.level2Code.GDarri_95232re_9595planObjects2.length = 0;
gdjs.level2Code.GDarri_95232re_9595planObjects3.length = 0;
gdjs.level2Code.GDarri_95232re_9595planObjects4.length = 0;
gdjs.level2Code.GDarri_95232re_9595planObjects5.length = 0;
gdjs.level2Code.GDsolObjects1.length = 0;
gdjs.level2Code.GDsolObjects2.length = 0;
gdjs.level2Code.GDsolObjects3.length = 0;
gdjs.level2Code.GDsolObjects4.length = 0;
gdjs.level2Code.GDsolObjects5.length = 0;
gdjs.level2Code.GDarbusteObjects1.length = 0;
gdjs.level2Code.GDarbusteObjects2.length = 0;
gdjs.level2Code.GDarbusteObjects3.length = 0;
gdjs.level2Code.GDarbusteObjects4.length = 0;
gdjs.level2Code.GDarbusteObjects5.length = 0;
gdjs.level2Code.GDobstacleObjects1.length = 0;
gdjs.level2Code.GDobstacleObjects2.length = 0;
gdjs.level2Code.GDobstacleObjects3.length = 0;
gdjs.level2Code.GDobstacleObjects4.length = 0;
gdjs.level2Code.GDobstacleObjects5.length = 0;
gdjs.level2Code.GDlampadaireObjects1.length = 0;
gdjs.level2Code.GDlampadaireObjects2.length = 0;
gdjs.level2Code.GDlampadaireObjects3.length = 0;
gdjs.level2Code.GDlampadaireObjects4.length = 0;
gdjs.level2Code.GDlampadaireObjects5.length = 0;
gdjs.level2Code.GDnuage2Objects1.length = 0;
gdjs.level2Code.GDnuage2Objects2.length = 0;
gdjs.level2Code.GDnuage2Objects3.length = 0;
gdjs.level2Code.GDnuage2Objects4.length = 0;
gdjs.level2Code.GDnuage2Objects5.length = 0;
gdjs.level2Code.GDnuage3Objects1.length = 0;
gdjs.level2Code.GDnuage3Objects2.length = 0;
gdjs.level2Code.GDnuage3Objects3.length = 0;
gdjs.level2Code.GDnuage3Objects4.length = 0;
gdjs.level2Code.GDnuage3Objects5.length = 0;
gdjs.level2Code.GDballonObjects1.length = 0;
gdjs.level2Code.GDballonObjects2.length = 0;
gdjs.level2Code.GDballonObjects3.length = 0;
gdjs.level2Code.GDballonObjects4.length = 0;
gdjs.level2Code.GDballonObjects5.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects1.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects2.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects3.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects4.length = 0;
gdjs.level2Code.GDfondu_9595noirObjects5.length = 0;


return;

}

gdjs['level2Code'] = gdjs.level2Code;
