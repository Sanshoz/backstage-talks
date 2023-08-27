import ImageComponent from "./ImageComponent"

const FixedContent = () => {
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
        <section className="flex child flex-col fixed inset-0">
            <div className={`grid grid-cols-2 flex  ${setMargin('mt')} ${setMargin('ml')} ${setMargin('mr')}`}>
                <div className="flex"> FAKE BACKSTAGE </div>
                <div className='flex justify-end'>fake@backstagetals.com</div>
            </div>
                
            

            <div className={` flex justify-between items-end mt-auto ${setMargin('mt')} ${setMargin('ml')} ${setMargin('mr')}`}>
                <div className="flex w-1/5">
                  <p>
                  Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
                  <br />© 2023 Published by Büro Milk
                  <br />Privacy Policy
                  </p>
                    </div>
                <div className='flex '>
                Issue #7 <br />
                Issue #6 <br />
                Issue #5 <br />
                Issue #4 <br />
                Issue #3 <br />
                Issue #2 <br />
                Issue #1
                </div>   
            </div>
            
        
              
        
        </section>

    )
}

export default FixedContent