import './App.css';
import FixedContent from './FixedContent'
import ImageComponent from './ImageComponent';
import { useEffect, useState } from 'react';
import venus from './imgs/venus.webp';
import seascape from './imgs/seascape.jpg';
import cidade from './imgs/cidade.jpg';
import mestiço from './imgs/mestiço.webp';
import girassois from './imgs/girassois.jpg'



const App = () => {
  const [bgColor, setBgColor] = useState('#00c1b5');
  const infos = {
    colors: ["#00c1b5", "#1d3fbb", "#e30512", "#ffbe00", '#ff651a'],
    imgs: [venus, seascape, cidade, girassois, mestiço],
    txt: [
      {
        picture: 'The Birth of Venus',
        artistName: 'Sandro Botticelli',
        txtPicture: 'A figura graciosa e serena de Vênus, acompanhada pelos ventos Zéfiro e Aura, captura a elegância e a harmonia da arte renascentista, sendo um testemunho duradouro da habilidade artística de Botticelli.',
      },
      {
        picture: 'Abstract Seascape',
        artistName: 'Melissa Sherowsk',
        txtPicture: 'A obra busca capturar a essência do cenário marítimo de maneira expressiva e subjetiva, permitindo interpretações variadas dos espectadores. Seu estilo abstrato enfatiza a criatividade artística e a liberdade de percepção',
      },
      {
        picture: 'Cidade Queimada de Sol',
        artistName: 'Antonio Bandeira',
        txtPicture: 'Com pinceladas fortes e cores vibrantes, o autor captura a intensidade da luz solar que incide sobre os edifícios e ruas, criando uma cena que parece estar à beira da efusão de calor.',
      },
      {
        picture: 'Os Girassóis',
        artistName: 'Vicent Van Gogh',
        txtPicture: 'Essa série reflete a paixão do artista por cores e natureza, ao mesmo tempo em que revela sua busca pela expressão emocional através da arte.',
      },
      {
        picture: 'O Mestiço',
        artistName: 'Candido Portinari',
        txtPicture: ' Enfatizando a riqueza da identidade mista, a pintura não apenas celebra a herança multifacetada, mas também questiona conceitos tradicionais de identidade e pertencimento.',
      }
    ]
  
  }
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  
  
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (mediaQuery.matches) {
      switch (true) {
        case scrollPosition < 500:
          setBgColor('#00c1b5');
          break;
        case scrollPosition < 1000:
          setBgColor('#1d3fbb');
          break;
        case scrollPosition < 2000:
          setBgColor('#e30512');
          break;
        case scrollPosition < 2600:
          setBgColor('#ffbe00');
          break;
        case scrollPosition < 3000:
          setBgColor('#ff651a');
      }
      console.log('A media query corresponde');
    } else {
      switch (true) {
        case scrollPosition < 500:
          setBgColor('#00c1b5');
          break;
        case scrollPosition < 1000:
          setBgColor('#1d3fbb');
          break;
        case scrollPosition < 2000:
          setBgColor('#e30512');
          break;
        case scrollPosition < 3000:
          setBgColor('#ffbe00');
          break;
        case scrollPosition < 3500:
          setBgColor('#ff651a');
      }
    }
    

    
  };

//  style={{backgroundColor: bgColor}}
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      
    }, []);
  return (
    <main className={`font-bold main flex flex-col`}  style={{backgroundColor: bgColor, transition: 'background-color 1s'}}>
      <FixedContent bgColor={bgColor} />
      {infos.colors.map((col,index) => (<ImageComponent
       key={index} color={col} bgColor={bgColor}
       issue={index+1}
       imgUrl={infos.imgs[index]}
       txtPicture={infos.txt[index].txtPicture}
       artistName={infos.txt[index].artistName}
       picture={infos.txt[index].picture}
       
       />
))}
      

      
    </main>
  );
}

export default App;
