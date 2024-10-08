import Link from 'next/link'

function products() {
  return (
    <main>
                    <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-3 mb-lg-0">
                            <div>
                                <div
                                    className="py-10 px-8 rounded"
                                    style={{
                                        background:
                                            "url(assets/images/banner/grocery-banner.png) no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                >
                                    <div className="img-content">
                                        <h3 className="fw-bold mb-1 img-content-bg">Fruits &amp; Vegetables</h3>
                                        <p className="mb-4 img-content-bg">
                                            Get Upto
                                            <span className="fw-bold img-content-bg">30%</span>
                                            Off
                                        </p>
                                        <Link href="#!" className="btn btn-dark">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div>
                                <div
                                    className="py-10 px-8 rounded"
                                    style={{
                                        background:
                                            "url(assets/images/banner/grocery-banner-2.jpg) no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                >
                                    <div className="img-content-2">
                                        <h3 className="fw-bold mb-1 img-content-bg2">Freshly Baked Buns</h3>
                                        <p className="mb-4 img-content-bg2">
                                            Get Upto
                                            <span className="fw-bold img-content-bg2">25%</span>
                                            Off
                                        </p>
                                        <Link href="#!" className="btn btn-dark ">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Popular Products Start*/}
            <section className="my-lg-14 my-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-6">
                            <h3 className="mb-0">Popular Products</h3>
                        </div>
                    </div>
                    <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">
                                    <div className="text-center position-relative">
                                        <div className="position-absolute top-0 start-0">
                                            <span className="badge bg-danger">Sale</span>
                                        </div>
                                        <Link href="#!">
                                            <img
                                                src="assets/images/products/product-img-1.jpg"
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </Link>
                                        <div className="card-product-action">
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i
                                                    className="bi bi-eye"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Quick View"
                                                />
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Wishlist"
                                            >
                                                <i className="bi bi-heart" />
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Compare"
                                            >
                                                <i className="bi bi-arrow-left-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-small mb-1">
                                        <Link href="#!" className="text-decoration-none text-muted">
                                            <small>Snack &amp; Munchies</small>
                                        </Link>
                                    </div>
                                    <h2 className="fs-6">
                                        <Link
                                            href="/components/shopsingle"
                                            className="text-inherit text-decoration-none"
                                        >
                                            Haldiram's Sev Bhujia
                                        </Link>
                                    </h2>
                                    <div>
                                        <small className="text-warning">
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-half" />
                                        </small>
                                        <span className="text-muted small">4.5(149)</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="text-dark">$18</span>
                                            <span className="text-decoration-line-through text-muted">
                                                $24
                                            </span>
                                        </div>
                                        <div>
                                            <Link href="#!" className="btn btn-primary btn-sm">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">
                                    <div className="text-center position-relative">
                                        <div className="position-absolute top-0 start-0">
                                            <span className="badge bg-success">14%</span>
                                        </div>
                                        <Link href="/components/shopsingle">
                                            <img
                                                src="assets/images/products/product-img-2.jpg"
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </Link>
                                        <div className="card-product-action">
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i
                                                    className="bi bi-eye"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Quick View"
                                                />
                                            </Link>
                                            <Link
                                                href="/components/shopwishlist"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Wishlist"
                                            >
                                                <i className="bi bi-heart" />
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Compare"
                                            >
                                                <i className="bi bi-arrow-left-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-small mb-1">
                                        <Link href="#!" className="text-decoration-none text-muted">
                                            <small>Bakery &amp; Biscuits</small>
                                        </Link>
                                    </div>
                                    <h2 className="fs-6">
                                        <Link
                                            href="/components/shopsingle"
                                            className="text-inherit text-decoration-none"
                                        >
                                            NutriChoice Digestive
                                        </Link>
                                    </h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-half" />
                                        </small>
                                        <span className="text-muted small">4.5 (25)</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="text-dark">$24</span>
                                        </div>
                                        <div>
                                            <Link href="#!" className="btn btn-primary btn-sm">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">
                                    <div className="text-center position-relative">
                                        <Link href="/components/shopsingle">
                                            <img
                                                src="assets/images/products/product-img-3.jpg"
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </Link>
                                        <div className="card-product-action">
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i
                                                    className="bi bi-eye"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Quick View"
                                                />
                                            </Link>
                                            <Link
                                                href="/components/shopwishlist"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Wishlist"
                                            >
                                                <i className="bi bi-heart" />
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Compare"
                                            >
                                                <i className="bi bi-arrow-left-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-small mb-1">
                                        <Link href="#!" className="text-decoration-none text-muted">
                                            <small>Bakery &amp; Biscuits</small>
                                        </Link>
                                    </div>
                                    <h2 className="fs-6">
                                        <Link
                                            href="/components/shopsingle"
                                            className="text-inherit text-decoration-none"
                                        >
                                            Cadbury 5 Star Chocolate
                                        </Link>
                                    </h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                        </small>
                                        <span className="text-muted small">5 (469)</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="text-dark">$32</span>
                                            <span className="text-decoration-line-through text-muted">
                                                $35
                                            </span>
                                        </div>
                                        <div>
                                            <Link href="#!" className="btn btn-primary btn-sm">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">
                                    <div className="text-center position-relative">
                                        <Link href="/components/shopsingle">
                                            <img
                                                src="assets/images/products/product-img-4.jpg"
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </Link>
                                        <div className="card-product-action">
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i
                                                    className="bi bi-eye"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Quick View"
                                                />
                                            </Link>
                                            <Link
                                                href="/components/shopwishlist"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Wishlist"
                                            >
                                                <i className="bi bi-heart" />
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Compare"
                                            >
                                                <i className="bi bi-arrow-left-right" />
                                            </Link>
                                        </div>
                                        <div className="position-absolute top-0 start-0">
                                            <span className="badge bg-danger">Hot</span>
                                        </div>
                                    </div>
                                    <div className="text-small mb-1">
                                        <Link href="#!" className="text-decoration-none text-muted">
                                            <small>Snack &amp; Munchies</small>
                                        </Link>
                                    </div>
                                    <h2 className="fs-6">
                                        <Link
                                            href="/components/shopsingle"
                                            className="text-inherit text-decoration-none"
                                        >
                                            Onion Flavour Potato
                                        </Link>
                                    </h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-half" />
                                            <i className="bi bi-star" />
                                        </small>
                                        <span className="text-muted small">3.5 (456)</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="text-dark">$3</span>
                                            <span className="text-decoration-line-through text-muted">
                                                $5
                                            </span>
                                        </div>
                                        <div>
                                            <Link href="#!" className="btn btn-primary btn-sm">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">
                                    <div className="text-center position-relative">
                                        <Link href="/components/shopsingle">
                                            <img
                                                src="assets/images/products/product-img-5.jpg"
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </Link>
                                        <div className="card-product-action">
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i
                                                    className="bi bi-eye"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Quick View"
                                                />
                                            </Link>
                                            <Link
                                                href="/components/shopwishlist"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Wishlist"
                                            >
                                                <i className="bi bi-heart" />
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Compare"
                                            >
                                                <i className="bi bi-arrow-left-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-small mb-1">
                                        <Link href="#!" className="text-decoration-none text-muted">
                                            <small>Instant Food</small>
                                        </Link>
                                    </div>
                                    <h2 className="fs-6">
                                        <Link
                                            href="/components/shopsingle"
                                            className="text-inherit text-decoration-none"
                                        >
                                            Salted Instant Popcorn
                                        </Link>
                                    </h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-half" />
                                        </small>
                                        <span className="text-muted small">4.5 (39)</span>
                                    </div>
                                    <div className="d-flex justify-content-between mt-4">
                                        <div>
                                            <span className="text-dark">$13</span>
                                            <span className="text-decoration-line-through text-muted">
                                                $18
                                            </span>
                                        </div>
                                        <div>
                                            <Link href="#!" className="btn btn-primary btn-sm">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">
                                    <div className="text-center position-relative">
                                        <div className="position-absolute top-0 start-0">
                                            <span className="badge bg-danger">Sale</span>
                                        </div>
                                        <Link href="#!">
                                            <img
                                                src="assets/images/products/product-img-6.jpg"
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </Link>
                                        <div className="card-product-action">
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i
                                                    className="bi bi-eye"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Quick View"
                                                />
                                            </Link>
                                            <Link
                                                href="/components/shopwishlist"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Wishlist"
                                            >
                                                <i className="bi bi-heart" />
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Compare"
                                            >
                                                <i className="bi bi-arrow-left-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-small mb-1">
                                        <Link href="#!" className="text-decoration-none text-muted">
                                            <small>Dairy, Bread &amp; Eggs</small>
                                        </Link>
                                    </div>
                                    <h2 className="fs-6">
                                        <Link
                                            href="/components/shopsingle"
                                            className="text-inherit text-decoration-none"
                                        >
                                            Blueberry Greek Yogurt
                                        </Link>
                                    </h2>
                                    <div>
                                        <small className="text-warning">
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-half" />
                                        </small>
                                        <span className="text-muted small">4.5 (189)</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="text-dark">$18</span>
                                            <span className="text-decoration-line-through text-muted">
                                                $24
                                            </span>
                                        </div>
                                        <div>
                                            <Link href="#!" className="btn btn-primary btn-sm">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">
                                    <div className="text-center position-relative">
                                        <Link href="/components/shopsingle">
                                            <img
                                                src="assets/images/products/product-img-7.jpg"
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </Link>
                                        <div className="card-product-action">
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i
                                                    className="bi bi-eye"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Quick View"
                                                />
                                            </Link>
                                            <Link
                                                href="/components/shopwishlist"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Wishlist"
                                            >
                                                <i className="bi bi-heart" />
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Compare"
                                            >
                                                <i className="bi bi-arrow-left-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-small mb-1">
                                        <Link href="#!" className="text-decoration-none text-muted">
                                            <small>Dairy, Bread &amp; Eggs</small>
                                        </Link>
                                    </div>
                                    <h2 className="fs-6">
                                        <Link
                                            href="/components/shopsingle"
                                            className="text-inherit text-decoration-none"
                                        >
                                            Britannia Cheese Slices
                                        </Link>
                                    </h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                        </small>
                                        <span className="text-muted small">5 (345)</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="text-dark">$24</span>
                                        </div>
                                        <div>
                                            <Link href="#!" className="btn btn-primary btn-sm">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">
                                    <div className="text-center position-relative">
                                        <Link href="/components/shopsingle">
                                            <img
                                                src="assets/images/products/product-img-8.jpg"
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </Link>
                                        <div className="card-product-action">
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i
                                                    className="bi bi-eye"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Quick View"
                                                />
                                            </Link>
                                            <Link
                                                href="/components/shopwishlist"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Wishlist"
                                            >
                                                <i className="bi bi-heart" />
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Compare"
                                            >
                                                <i className="bi bi-arrow-left-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-small mb-1">
                                        <Link href="#!" className="text-decoration-none text-muted">
                                            <small>Instant Food</small>
                                        </Link>
                                    </div>
                                    <h2 className="fs-6">
                                        <Link
                                            href="/components/shopsingle"
                                            className="text-inherit text-decoration-none"
                                        >
                                            Kellogg's Original Cereals
                                        </Link>
                                    </h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-half" />
                                        </small>
                                        <span className="text-muted small">4 (90)</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="text-dark">$32</span>
                                            <span className="text-decoration-line-through text-muted">
                                                $35
                                            </span>
                                        </div>
                                        <div>
                                            <Link href="#!" className="btn btn-primary btn-sm">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">
                                    <div className="text-center position-relative">
                                        <Link href="/components/shopsingle">
                                            <img
                                                src="assets/images/products/product-img-9.jpg"
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </Link>
                                        <div className="card-product-action">
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i
                                                    className="bi bi-eye"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Quick View"
                                                />
                                            </Link>
                                            <Link
                                                href="/components/shopwishlist"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Wishlist"
                                            >
                                                <i className="bi bi-heart" />
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Compare"
                                            >
                                                <i className="bi bi-arrow-left-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-small mb-1">
                                        <Link href="#!" className="text-decoration-none text-muted">
                                            <small>Snack &amp; Munchies</small>
                                        </Link>
                                    </div>
                                    <h2 className="fs-6">
                                        <Link
                                            href="/components/shopsingle"
                                            className="text-inherit text-decoration-none"
                                        >
                                            Slurrp Millet Chocolate
                                        </Link>
                                    </h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-half" />
                                        </small>
                                        <span className="text-muted small">4.5 (67)</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="text-dark">$3</span>
                                            <span className="text-decoration-line-through text-muted">
                                                $5
                                            </span>
                                        </div>
                                        <div>
                                            <Link href="#!" className="btn btn-primary btn-sm">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">
                                    <div className="text-center position-relative">
                                        <Link href="/components/shopsingle">
                                            <img
                                                src="assets/images/products/product-img-10.jpg"
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </Link>
                                        <div className="card-product-action">
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i
                                                    className="bi bi-eye"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Quick View"
                                                />
                                            </Link>
                                            <Link
                                                href="/components/shopwishlist"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Wishlist"
                                            >
                                                <i className="bi bi-heart" />
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Compare"
                                            >
                                                <i className="bi bi-arrow-left-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-small mb-1">
                                        <Link href="#!" className="text-decoration-none text-muted">
                                            <small>Dairy, Bread &amp; Eggs</small>
                                        </Link>
                                    </div>
                                    <h2 className="fs-6">
                                        <Link
                                            href="/components/shopsingle"
                                            className="text-inherit text-decoration-none"
                                        >
                                            Amul Butter - 500 g
                                        </Link>
                                    </h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-half" />
                                            <i className="bi bi-star" />
                                        </small>
                                        <span className="text-muted small">3.5 (89)</span>
                                    </div>
                                    <div className="d-flex justify-content-between mt-4">
                                        <div>
                                            <span className="text-dark">$13</span>
                                            <span className="text-decoration-line-through text-muted">
                                                $18
                                            </span>
                                        </div>
                                        <div>
                                            <Link href="#!" className="btn btn-primary btn-sm">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Popular Products End*/}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-6">
                            <h3 className="mb-0">Daily Best Sells</h3>
                        </div>
                    </div>
                    <div className="table-responsive-lg pb-6">
                        <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4 flex-nowrap">
                            <div className="col">
                                <div
                                    className="pt-8 px-6 px-xl-8 rounded"
                                    style={{
                                        background:
                                            "url(assets/images/banner/banner-deal.jpg) no-repeat",
                                        backgroundSize: "cover",
                                        height: 470
                                    }}
                                >
                                    <div className="coffee-beans">
                                        <h3 className="fw-bold coffee-beans text-white">
                                            100% Organic Coffee Beans.
                                        </h3>
                                        <p className="coffee-beans text-white">Get the best deal before close.</p>
                                        <Link href="#!" className="btn btn-primary">
                                            Shop Now
                                            <i className="feather-icon icon-arrow-right ms-1 bg-success-match" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card card-product">
                                    <div className="card-body">
                                        <div className="text-center position-relative">
                                            <Link href="/components/shopsingle">
                                                <img
                                                    src="assets/images/products/product-img-11.jpg"
                                                    alt="Grocery Ecommerce Template"
                                                    className="mb-3 img-fluid"
                                                />
                                            </Link>
                                            <div className="card-product-action">
                                                <Link
                                                    href="#!"
                                                    className="btn-action"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quickViewModal"
                                                >
                                                    <i
                                                        className="bi bi-eye"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-html="true"
                                                        title="Quick View"
                                                    />
                                                </Link>
                                                <Link
                                                    href="#!"
                                                    className="btn-action"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Wishlist"
                                                >
                                                    <i className="bi bi-heart" />
                                                </Link>
                                                <Link
                                                    href="#!"
                                                    className="btn-action"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Compare"
                                                >
                                                    <i className="bi bi-arrow-left-right" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="text-small mb-1">
                                            <Link href="#!" className="text-decoration-none text-muted">
                                                <small>Tea, Coffee &amp; Drinks</small>
                                            </Link>
                                        </div>
                                        <h2 className="fs-6">
                                            <Link
                                                href="/components/shopsingle"
                                                className="text-inherit text-decoration-none"
                                            >
                                                Roast Ground Coffee
                                            </Link>
                                        </h2>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div>
                                                <span className="text-dark">$13</span>
                                                <span className="text-decoration-line-through text-muted">
                                                    $18
                                                </span>
                                            </div>
                                            <div>
                                                <small className="text-warning">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-half" />
                                                </small>
                                                <span>
                                                    <small>4.5</small>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-grid mt-2">
                                            <Link href="#!" className="btn btn-primary">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add to cart
                                            </Link>
                                        </div>
                                        <div className="d-flex justify-content-start text-center mt-3">
                                            <div
                                                className="deals-countdown w-100"
                                                data-countdown="2028/10/10 00:00:00"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card card-product">
                                    <div className="card-body">
                                        <div className="text-center position-relative">
                                            <Link href="/components/shopsingle">
                                                <img
                                                    src="assets/images/products/product-img-12.jpg"
                                                    alt="Grocery Ecommerce Template"
                                                    className="mb-3 img-fluid"
                                                />
                                            </Link>
                                            <div className="card-product-action">
                                                <Link
                                                    href="#!"
                                                    className="btn-action"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quickViewModal"
                                                >
                                                    <i
                                                        className="bi bi-eye"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-html="true"
                                                        title="Quick View"
                                                    />
                                                </Link>
                                                <Link
                                                    href="#!"
                                                    className="btn-action"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Wishlist"
                                                >
                                                    <i className="bi bi-heart" />
                                                </Link>
                                                <Link
                                                    href="#!"
                                                    className="btn-action"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Compare"
                                                >
                                                    <i className="bi bi-arrow-left-right" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="text-small mb-1">
                                            <Link href="#!" className="text-decoration-none text-muted">
                                                <small>Fruits &amp; Vegetables</small>
                                            </Link>
                                        </div>
                                        <h2 className="fs-6">
                                            <Link
                                                href="/components/shopsingle"
                                                className="text-inherit text-decoration-none"
                                            >
                                                Crushed Tomatoes
                                            </Link>
                                        </h2>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div>
                                                <span className="text-dark">$13</span>
                                                <span className="text-decoration-line-through text-muted">
                                                    $18
                                                </span>
                                            </div>
                                            <div>
                                                <small className="text-warning">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-half" />
                                                </small>
                                                <span>
                                                    <small>4.5</small>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-grid mt-2">
                                            <Link href="#!" className="btn btn-primary">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add to cart
                                            </Link>
                                        </div>
                                        <div className="d-flex justify-content-start text-center mt-3 w-100">
                                            <div
                                                className="deals-countdown w-100"
                                                data-countdown="2028/12/9 00:00:00"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card card-product">
                                    <div className="card-body">
                                        <div className="text-center position-relative">
                                            <Link href="/components/shopsingle">
                                                <img
                                                    src="assets/images/products/product-img-13.jpg"
                                                    alt="Grocery Ecommerce Template"
                                                    className="mb-3 img-fluid"
                                                />
                                            </Link>
                                            <div className="card-product-action">
                                                <Link
                                                    href="#!"
                                                    className="btn-action"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quickViewModal"
                                                >
                                                    <i
                                                        className="bi bi-eye"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-html="true"
                                                        title="Quick View"
                                                    />
                                                </Link>
                                                <Link
                                                    href="#!"
                                                    className="btn-action"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Wishlist"
                                                >
                                                    <i className="bi bi-heart" />
                                                </Link>
                                                <Link
                                                    href="#!"
                                                    className="btn-action"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Compare"
                                                >
                                                    <i className="bi bi-arrow-left-right" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="text-small mb-1">
                                            <Link href="#!" className="text-decoration-none text-muted">
                                                <small>Fruits &amp; Vegetables</small>
                                            </Link>
                                        </div>
                                        <h2 className="fs-6">
                                            <Link
                                                href="/components/shopsingle"
                                                className="text-inherit text-decoration-none"
                                            >
                                                Golden Pineapple
                                            </Link>
                                        </h2>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div>
                                                <span className="text-dark">$13</span>
                                                <span className="text-decoration-line-through text-muted">
                                                    $18
                                                </span>
                                            </div>
                                            <div>
                                                <small className="text-warning">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-half" />
                                                </small>
                                                <span>
                                                    <small>4.5</small>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-grid mt-2">
                                            <Link href="#!" className="btn btn-primary">
                                               <i style={{fontSize:'1.1rem',}} className="bi bi-plus bg-success-match"></i>
                                                Add to cart
                                            </Link>
                                        </div>
                                        <div className="d-flex justify-content-start text-center mt-3">
                                            <div
                                                className="deals-countdown w-100"
                                                data-countdown="2028/11/11 00:00:00"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-lg-14 py-8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6">
                                    <img src="assets/images/icons/clock.svg" alt="" />
                                </div>
                                <h3 className="h5 mb-3">10 minute grocery now</h3>
                                <p>
                                    Get your order delivered to your doorstep at the earliest from
                                    FreshCart pickup stores near you.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6">
                                    <img src="assets/images/icons/gift.svg" alt="" />
                                </div>
                                <h3 className="h5 mb-3">Best Prices &amp; Offers</h3>
                                <p>
                                    Cheaper prices than your local supermarket, great cashback offers
                                    to top it off. Get best pricess &amp; offers.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6">
                                    <img src="assets/images/icons/package.svg" alt="" />
                                </div>
                                <h3 className="h5 mb-3">Wide Assortment</h3>
                                <p>
                                    Choose from 5000+ products across food, personal care, household,
                                    bakery, veg and non-veg &amp; other categories.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6">
                                    <img src="assets/images/icons/refresh-cw.svg" alt="" />
                                </div>
                                <h3 className="h5 mb-3">Easy Returns</h3>
                                <p>
                                    Not satisfied with a product? Return it at the doorstep &amp; get
                                    a refund within hours. No questions asked
                                    <Link href="#!">policy</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </main>
  )
}

export default products
