const canvas = document.getElementById('canvas');
const contexto = canvas.getContext("2d");
/* contexto.fillStyle="red";
contexto.lineWidth="2";
contexto.strokeStyle="gray";
contexto.fillRect(10,10,150,100);
contexto.strokeRect(30,30,150,100); */
contexto.beginPath();
contexto.lineWidth = "5";
contexto.moveTo(60,60);
contexto.lineTo(90,90);
contexto.lineTo(120,60);
contexto.lineTo(120,30);
contexto.lineTo(60,30);
contexto.lineTo(60,60);
contexto.closePath();
contexto.fillStyle = "black";
contexto.strokeStyle = "red";
contexto.stroke();
contexto.fill();

contexto.beginPath()
contexto.lineWidth = "10";
contexto.moveTo(150,150);
contexto.lineTo(300,150);
contexto.fillStyle = "black";
contexto.strokeStyle = "red";
contexto.stroke();
contexto.fill();