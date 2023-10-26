import videoHomepage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video  autoPlay loop muted   >
                <source
                    src={videoHomepage}
                    type="video/mp4"
                />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>Hello, My name is Manh</div>
                <div className='title-2'>I'm the person you need. Let's build a common dream together.</div>
                <div className='title-3'>
                    <button>let's go</button>
                </div>

            </div>
        </div>
    )
}
export default HomePage;