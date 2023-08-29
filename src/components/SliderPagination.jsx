import '../components/css/slider-pagination.css'


export const SliderPagination = ({
  slide
})=>{
  return(
    <div className='pagination-container'>
      <div className='pagination-items-container'>
        <div className='pagination-item' style={{backgroundColor:slide==0 ? '#357234' : 'rgba(0, 0, 0, 0.40)'}}/>
        <div className='pagination-item' style={{backgroundColor:slide==1 ? '#357234' : 'rgba(0, 0, 0, 0.40)'}}/>
        <div className='pagination-item' style={{backgroundColor:slide==2 ? '#357234' : 'rgba(0, 0, 0, 0.40)'}}/>
      </div>
    </div>
  )
}