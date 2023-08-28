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
                <div className="flex text-4xl"> FAKE BACKSTAGE </div>
                <div className='flex justify-end '>fake@backstagetals.com</div>
            </div>
                
            

            <div className={` flex justify-between items-end mt-auto ${setMargin('mt')} ${setMargin('ml')} ${setMargin('mr')}`}>
                <div className="flex w-1/5">
                  <p>
                  Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
                  <br />© 2023 Published by Büro Milk
                  <br />Privacy Policy
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