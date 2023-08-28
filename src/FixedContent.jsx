import boxicons from "boxicons"

const FixedContent = (props) => {
    const bgColor = props.bgColor
    const setMargin = (margin) => {
        if(margin === 'mt'){
          return 'mt-5 '
        }
        if(margin === 'mb'){
          return 'mb-10 '
        }
        if(margin === 'mr'){
          return 'mr-5 '
        }
        if(margin === 'ml'){
          return 'ml-5 '
        }
    
      }

    return (
        <section className="flex flex-col fixed inset-0 invisible md:visible" >
          
            <div className={`grid grid-cols-2 flex  ${setMargin('mt')} ${setMargin('ml')} ${setMargin('mr')}`}>
                <div className="flex text-4xl"> FAKE magazine </div>
                <div className='flex justify-end '>kelvykellysson@gmail.com</div>
            </div>
                
            

            <div className={` flex justify-between items-end mt-auto ${setMargin('mt')} ${setMargin('ml')} ${setMargin('mr')}`}>
                <div className="flex w-1/5">
                  <p>
                  This site is a copy from Backstage Talks design. I tried my best to look similar, but there are some difference, as you can see with the photos.
                  <br />Changed the images to pictures from some amazing artists.
                  <br />Feel free to say what do you think about the site and contact me <br />
                  </p>
                    </div>
                <div className=' text-right'>
                  <div className="links" style={bgColor === "#ff651a"? {fontSize: "1vw"}: {}} >Issue #5</div> 
                  <div className="links" style={bgColor === "#ffbe00"? {fontSize: "1vw"}: {}} >Issue #4</div> 
                  <div className="links" style={bgColor === "#e30512"? {fontSize: "1vw"}: {}} >Issue #3</div> 
                  <div className="links" style={bgColor === "#1d3fbb"? {fontSize: "1vw"}: {}} >Issue #2</div> 
                  <div className="links" style={bgColor === "#00c1b5"? {fontSize: "1vw"}: {}} >Issue #1</div> 
      
                </div>   
            </div>
            
        
              
        
        </section>

    )
}

export default FixedContent