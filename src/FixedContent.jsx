const FixedContent = () => {
    const setMargin = (margin) => {
        if(margin === 'mt'){
          return 'mt-5 '
        }
        if(margin === 'mb'){
          return 'mb-1 '
        }
        if(margin === 'mr'){
          return 'mr-5 '
        }
        if(margin === 'ml'){
          return 'ml-10 '
        }
    
      }
    
    return (
        <section className="flex flex-col justify-between child ">
            <div className={`grid grid-cols-2 flex justify-between  ${setMargin('mt')} ${setMargin('ml')} ${setMargin('mr')}`}>
                <div> FAKE BACKSTAGE </div>
                <div className='flex justify-end'>fake@backstagetals.com</div>
            </div>
            <div className='book flex justify-center'>
                <img src={`https://placehold.co/400x500/orange/white?text=Hello+World` } alt='book image'  ></img>
            </div>
            <div className={'infos grid grid-cols-3 flex '+ setMargin("ml") + setMargin("mr") + setMargin("mb")}>
                <div className='flex'><p>
                Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
        © 2023 Published by Büro Milk
                </p>

        Privacy Policy</div>
                <div className='flex justify-center text-center'>Issue #1 <br />
                is sold out. <br />

        If you are lucky, you may get the last pieces in selected stores.</div> 
                <div className='flex justify-end '>
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