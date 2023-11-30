import './UserData.css'
import miImagen from '/hipo.jpg';
function UserData(){
  return (
  <div className='UserDataContainer'>
    <div className='UserImageContainer'>
      <div className='UserImageBorder'>
        <img className='AdjustedImage' src={miImagen}></img>
      </div>
    </div>
    <div className='UserData'>
      <p className='UserName'>Fernando Gutarra</p>
      <p className='UserProfession'>UX Designer</p>
    </div>
  </div>
  );
}
export default UserData;