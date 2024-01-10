import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js"; 

var webglEl = document.getElementById("webgl");

var width = window.innerWidth,
  height = window.innerHeight;

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000);
camera.position.z = 3; //1.8



var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

scene.add(new THREE.AmbientLight(0x333333));



var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-5, 3, 5);
scene.add(light);

var ball = new THREE.Mesh(
  new THREE.SphereGeometry(0.2, 32, 32),
  new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture("ball.jpeg"),
    specular: new THREE.Color("grey"),
  })
);
ball.translateY(0.28);
ball.translateX(0.5);
ball.translateZ(0);

scene.add(ball);

var table = new THREE.Mesh(
  new THREE.BoxGeometry(4, 0.1, 2.5, 10, 10, 10),
  new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture("wood.jpeg"),
  })
);
table.rotateX(degrees_to_radians(20));
scene.add(table);


var cylinder = new THREE.Mesh(
  new THREE.CylinderGeometry(0.25,0.25,1,32),
  new THREE.MeshBasicMaterial({
    color:0xfffff
  })
)
cylinder
scene.add(cylinder)




webglEl.appendChild(renderer.domElement);



render();

function render() {
  // controls.update();
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}
