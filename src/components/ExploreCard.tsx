import Link from "next/link";
import Icons from "./Icons";
const ExploreCard = (props:any) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card p-4 explore-card-wrapper border-0 position-relative h-100">
                <div className="d-flex justify-content-between border-0 align-items-center">
                    <div className='explore-card-img'>
                        <img src={props.bagimg} alt="bag" className='img-fluid' />
                    </div>
                    <p className='m-0 fs-14 text-secondary'>{props.products}</p>
                </div>
                <div className='card-content'>
                    <p className='fs-14 text-seconndary pt-3 m-0'>Manufacturar</p>
                    <h3 className='text-primary fw-bold pb-3'>{props.heading}</h3>
                    <Link href='' className='exploring-card-text'>
                        <span>See Collection</span>
                        <Icons.Rigtharrow />
                    </Link>
                </div>
                <div className='explore-img-icon'>
                    {props.ExploreIcon }
                </div>
            </div>
        </div>
    )
}
export default ExploreCard