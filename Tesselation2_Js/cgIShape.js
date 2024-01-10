class cgIShape {
    constructor () {
        this.points = [];
        this.bary = [];
        this.indices = [];
    }
    
    addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {
        var nverts = this.points.length / 4;
        
        // push first vertex
        this.points.push(x0);  this.bary.push (1.0);
        this.points.push(y0);  this.bary.push (0.0);
        this.points.push(z0);  this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
        
        // push second vertex
        this.points.push(x1); this.bary.push (0.0);
        this.points.push(y1); this.bary.push (1.0);
        this.points.push(z1); this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++
        
        // push third vertex
        this.points.push(x2); this.bary.push (0.0);
        this.points.push(y2); this.bary.push (0.0);
        this.points.push(z2); this.bary.push (1.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
    }
}

class Cube extends cgIShape {
    
    constructor (subdivisions) {
        super();
        this.makeCube (subdivisions);
    }
    
    makeCube(subdivisions) {
        
        if( subdivisions < 1 )
            subdivisions = 1;

     var step = 1. /  subdivisions;
        
        for (var i = 0; i < subdivisions; i++) {    
        // console.log(i)
        var u0 = i * step - .5;
         var u1 = (i + 1) * step - .5;
        for ( var j = 0; j < subdivisions; j++) {
            var v0 = j * step - .5;
            var v1 = (j + 1) * step - .5;
            // face (x,y,-.5) drawn clockwise
            this.addTriangle(u1, v0, -.5, u0, v0, -.5, u0, v1, -.5);
            this.addTriangle(u1, v0, -.5, u0, v1, -.5, u1, v1, -.5);
            // face (x,y,.5) drawn counterclockwise
            this.addTriangle(u0, v0, .5, u1, v0, .5, u0, v1, .5);
            this.addTriangle(u0, v1, .5, u1, v0, .5, u1, v1, .5);
            // face (-.5,y,z) drawn counterclockwise
            this.addTriangle(-.5, u0, v1, -.5, u1, v0, -.5, u0, v0);
            this.addTriangle(-.5, u1, v1, -.5, u1, v0, -.5, u0, v1);
            // face (.5,y,z) drawn clockwise
            this.addTriangle(.5, u1, v0, .5, u0, v1, .5, u0, v0);
            this.addTriangle(.5, u1, v0, .5, u1, v1, .5, u0, v1);
            // face (x,-.5,z) drawn clockwise
            this.addTriangle(u1, -.5, v0, u0, -.5, v1, u0, -.5, v0);
            this.addTriangle(u1, -.5, v0, u1, -.5, v1, u0, -.5, v1);
            // face (x,.5,z) drawn counterclockwise
            this.addTriangle(u0, .5, v1, u1, .5, v0, u0, .5, v0);
            this.addTriangle(u1, .5, v1, u1, .5, v0, u0, .5, v1);
        }
        }
    }
}


class Cylinder extends cgIShape {

    constructor(radialdivision, heightdivision) {
        super();
        this.makeCylinder(radialdivision, heightdivision);
    }
    
    makeCylinder(radialdivision, heightdivision) {
        var radius = 0.5
        if (radialdivision < 3)
            radialdivision = 3;

        if (heightdivision < 1)
            heightdivision = 1;

        const PI = 3.14159265358979;
        var y0 = -.5
        for (var i = 0; i < radialdivision; i++) {
            // we compute the coordinates of the triangle MON, 
            // where M(x0,+/-.5,z0), O(0,+/-.5,0) and N(x1,+/-.5,z1)
            var x0 = radius * Math.cos(i * 2 * PI / radialdivision);
            var z0 = radius * Math.sin(i * 2 * PI / radialdivision);
            var x1 = radius * Math.cos((i + 1) * 2 * PI / radialdivision);
            var z1 = radius * Math.sin((i + 1) * 2 * PI / radialdivision);

            // face (x,-.5,z) drawn clockwise
            this.addTriangle(0., -.5, 0., x0, -.5, z0, x1, -.5, z1);
            // face (x,5,z) drawn counterclockwise
            this.addTriangle(x1, .5, z1, x0, .5, z0, 0., .5, 0.);

            // draw the rectangles for the height
            for (var j = 0; j < heightdivision; j++) {
                y0 = (j) / heightdivision - .5;
                var y1 = (j + 1) / heightdivision - .5;
                this.addTriangle(x0, y1, z0, x1, y1, z1, x0, y0, z0);
                this.addTriangle(x1, y1, z1, x1, y0, z1, x0, y0, z0);
            }
        }
    
    }
    
}

class Cone extends cgIShape {

    constructor (radialdivision, heightdivision) {
        super();
        this.makeCone (radialdivision, heightdivision);
    }
    
    
    makeCone (radialdivision, heightdivision) {
    
        var radius=0.5
    if( radialdivision < 3 )
        radialdivision = 3;

    if( heightdivision < 1 )
        heightdivision = 1;

    const  PI = 3.14159265358979;

    for (var i = 0; i < radialdivision; i++) {
        
        var x0 = radius * Math.cos(i * 2 * PI / radialdivision);
        var z0 = radius * Math.sin(i * 2 * PI / radialdivision);
        var x1 = radius * Math.cos((i + 1) * 2 * PI / radialdivision);
        var z1 = radius * Math.sin((i + 1) * 2 * PI / radialdivision);

        
        this.addTriangle(x0, -0.5, z0, x1, -0.5, z1, 0.0, -0.5, 0.0);

        var y0 = -0.5;
         var cx0 = -x0 / heightdivision;
        var cz0 = -z0 / heightdivision;
        var cx1 = -x1 / heightdivision;
        var cz1 = -z1 / heightdivision;
        var y1 = 1.0 / heightdivision;
        
        for (var j = 0; j < heightdivision - 1; j++) {
                
            this.addTriangle(x0, y0, z0, x0+cx0, y0+y1, z0+cz0, x1, y0, z1);
            this.addTriangle(x0+cx0, y0+y1, z0+cz0, x1+cx1, y0+y1, z1+cz1, x1, y0, z1);

            var x0 = x0+ cx0;
            var z0 =  z0 + cz0;
            var x1 =  x1 +cx1;
            var z1 =  z1+cz1;
            var y0 =  y0 +y1;
        }

        
        this.addTriangle(x0, y0, z0, 0.0, 0.5, 0.0, x1, y0, z1);
    }
    }
}
    
class Sphere extends cgIShape {

    constructor (slices, stacks) {
        super();
        this.makeSphere (slices, stacks);
    }
    
    makeSphere (slices, stacks) {
        // fill in your sphere code here
    }

}


function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

