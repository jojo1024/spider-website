
function DataNotFound() {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container px-lg-5 text-center">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <i className="bi bi-exclamation-triangle display-1 text-green"></i>
                <h1 className="mb-4">Aucun résultat trouvé</h1>
            </div>
        </div>
    </div>
</div>
  )
}

export default DataNotFound