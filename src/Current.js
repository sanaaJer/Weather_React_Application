import React from 'react'

export default function Current() {
  return (
    <div className='div_current'>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center'}}>
           <h3>Casablanca</h3>
           <img  src='/weather.png' style={{width:'8em',height:'6.5em'}}/>
            <h4>25°c</h4>
        </div>
        <div  style={{flex:1,display:'flex',flexDirection:'column'}}>
            <div style={{flex:1,display:'flex',flexDirection:'row',paddingBottom:'1.5em'}}>
                    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRight:'2px solid white'}}>
                        <p style={{margin:0}}>Humidity</p>
                        <h4 style={{margin:0}}>23</h4>
                    </div>
                    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:0}}>
                        <p style={{margin:0}}>Humidity</p>
                        <h4 style={{margin:0}}>23</h4>
                    </div>
            </div>
            <div style={{flex:1,display:'flex',flexDirection:'row'}}>
                   <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRight:'2px solid white'}}>
                        <p style={{margin:0}}>Humidity</p>
                        <h4 style={{margin:0}}>23</h4>
                    </div>
                    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:0}}>
                        <p style={{margin:0}}>Humidity</p>
                        <h4 style={{margin:0}}>23</h4>
                    </div>
            </div>

  



          


        </div>
      </div>
    </div>
  )
}
