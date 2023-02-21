import Link from 'next/link'

const Demo = ({version , path , img }) => {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="demo-item">
        {version && <div className="demo-badge">{version}</div>}
        <Link href={path}><img src={img} alt="demo" className="img-responsive" /></Link>
        <div className="preview-btn-wrapper text-center">
          <Link href={path}><a className="preview-demo">View demo <i className="fa fa-long-arrow-right" /></a></Link>
        </div>
      </div>
    </div>

  );
}

export default Demo;
