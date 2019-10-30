import * as THREE from 'three';

function createCamera( container ) { 

  const cam = new THREE.PerspectiveCamera( 65, container.clientWidth / container.clientHeight, 0.01, 1000 );
  cam.position.set( 0,140,100 );

  return cam;

}

function createRenderer( container ) {

  const renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
  
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.setPixelRatio( window.devicePixelRatio );

  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;

  renderer.physicallyCorrectLights = true;

  container.appendChild( renderer.domElement );

  return renderer;

}

export { createCamera, createRenderer };