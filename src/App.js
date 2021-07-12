import './App.css';
import Header from './header';
import Footer from './footer';
import Card from './card';
import Feedback from './Feedback';
import NewsLetter from './NewsLetter';
import Section from './Section';
import Head from './Head';
import Foot from './foot';
import GoTop from './GoTop';




function App() {
  return (
    <>
   
  <Header/>
  <GoTop/>
  <Head/>
  <Card
  imgsrc1=".reactApp/images/img1.png"
  imgsrc2=".reactApp/images/img2.png"
  imgsrc3=".reactApp/images/img3.jpg"
  imgsrc4=".reactApp/images/img4.jpg"
  //titles
  title1="Boat Headphones"
  title2="Boat Earphones"
  title3="Bluetooths"
  title4="Sony Speakers"
  />
  <Card
  imgsrc1=".reactApp/images/img5.jpeg"
  imgsrc2=".reactApp/images/img6.jpg"
  imgsrc3=".reactApp/images/img7.jpg"
  imgsrc4=".reactApp/images/watch.jpg"
  //titles
  title1="Sandisk Pendrive"
  title2="Phone Stand"
  title3="Fogg Deo"
  title4="Smart Watch"
  />
  <Section
  img=".reactApp/images/referral.jpg"
  title=" REFFERAL PAGE"
  btn="CHECK"
  />
  <Section
  img=".reactApp\images\ipl.jpg"
  title="EARN COINS BY PLAYING IPL-BONANZA!!"
  btn="PLAY NOW"
  />
   <Feedback/>
  
  <NewsLetter/>
<Foot/>
  <Footer/>
   </>
  );
}

export default App;
