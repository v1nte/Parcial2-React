
const Card = ({title, desc, price, brand, category}) => {
  return (
    <div className="card" style={{margin: '1rem', width: '25rem'}}>
      <div className="card-header">
        <div className="card-header-title" style={{textAlign: 'center'}}>
          { brand }: { title } 
        </div>
      </div>

      <div className="card-content">
      { desc }
      </div>

      <div className="card-content">
      { category }
      </div>

      <div className="card-footer">
           $USD { price } 
      </div>
      
    </div>
  )
}

export default Card
