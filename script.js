
//Seleção de itens

let aviso = document.querySelector('.aviso');
let title = document.querySelector('.titulo');
let tempInf = document.querySelector('.tempInfo');
let inf = document.querySelector('.info img');
let vent = document.querySelector('.ventoInfo');
let angle = document.querySelector('.ventoPonto');


document.querySelector('.busca').addEventListener('submit', async (event)=>{
        event.preventDefault();
        let input = document.querySelector('#searchInput').value;

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=4380e5e3e78e08b75fc1f8c96f345a99&units=metric&lang=pt_br`;
        let result = await fetch(url);
        let json = await result.json();



        if(json.cod == 200){
            emitirMenssege('Carregando....');
                showInfo({
                    name: json.name,
                    country: json.sys.country,
                    temp: json.main.temp,
                    tempIcon: json.weather[0].icon,
                    windSpeed: json.wind.speed,
                    windAngle: json.wind.deg
                });
        }else{
            emitirMenssege('Opa, Não encontramos nada!');
        }
        

});


function emitirMenssege(msg){
    aviso.innerHTML = msg;
}

function showInfo(json){
   emitirMenssege('');
   title.innerHTML = `${json.name}, ${json.country}`;
   tempInf.innerHTML = `${json.temp} <sump>ºC</sump>`;
   inf.setAttribute('src',`http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
   vent.innerHTML = `${json.windSpeed}<span>km/h</span>`;
   angle.style.transform = (`${json.windAngle - 90}deg`);

   document.querySelector('.resultado').style.display = 'block';

   
}











