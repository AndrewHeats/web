import Info from '../../components/info/info'
import '../../components/info/info.css'
import Zoos from '../../components/zoos/zoos'
import '../../components/zoos/zoos.css'
import ViewMoreButton from '../../components/viewmoreButton/viewmoreButton'
import '../../components/viewmoreButton/viewmoreButton.css'


function Home() {
  return (
    <div className="Home">
      <Info/>
      <Zoos/>
      <ViewMoreButton/>
    </div>
  );
}

export default Home;
