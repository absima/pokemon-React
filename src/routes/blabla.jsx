import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Form, Link, useSearchParams, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../redux/productSlice';
import { logoutUser, selectUser } from '../redux/userSlice';
import SearchPart from './searchPart';

const HeaderPart = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);
  const [searchParams, setSearchParams] = useSearchParams();
  const prms = useParams();
  const controller = Object.keys(prms).length;
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);

  const cartItems =
    cart.length > 0 ? cart.reduce((a, item) => a + item.num, 0) : 0;

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    setSearchParams({ filter: e.target.value });
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    setOpen(!open);
  };

  const handleMenuTwo = () => {
    setOpen(!open);
  };

  const handleMenuThree = () => {
    setOpen(!open);
  };


  const handleClear = () => {
    setSearch('');
    setFilter('');
    setSearchParams({});
  };


  // submit search handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let params = serializeFormQuery(searchParams);
    if (params) {
      setSearchParams({ filter: params });
    } else {
      setSearchParams({});
    }
    setSearch('');
    // close search bar
    setOpen(false);
    // redirect to search page
    window.location.href = '/search';
  };

  // serialize form data
  const serializeFormQuery = (params) => {
    let query = '';
    for (let [key, value] of params) {
      query += `${key}=${value}&`;
    }
    return query;
  };

  useEffect(() => {
    if (search) {
      setSearchParams({ filter: search });
    }
  }, [search]);

  return (
    <header className="header">
      <Container>
        <Row>
          <Col md={3} className="header__logo">
            <div>
              <Link className="brand" to="/">
                {/* <img
                src="/images/img.png"
                alt="logo"
                style={{ width: '100px', height: '100px' }}
              /> */}
                {/* Simazon */}
                <h1>Shop</h1>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} className="search">
            <SearchPart
              search={search}
              filter={filter}
              open={open}
              handleSearch={handleSearch}
              handleFilter={handleFilter}
              handleOpen={handleOpen}
              handleSubmit={handleSubmit}
            />
          </Col>
          <Col xs={12} md={3}>
            <div className="cart">
              <Link to="/cart">
                Cart <FontAwesomeIcon icon={faCartShopping} />
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems}</span>
                )}
              </Link>
              {controller ? (
                <div className="dropdown">
                  <Link to="/profile">
                    <img
                      src={user.avatar ? user.avatar : '/images/img.png'}
                      alt="avatar"
                    />
                    <span>{prms.username}</span>
                    <i className="fas fa-chevron-down"></i>
                    {/* {user.role === 'admin' && ( */}{' '}
                    <div className="dropdown-content">
                      {/* <Link to="/dashboard">Dashboard</Link> */}
                      <Link to="/profile">Profile</Link>
                      <Link to="/setting">Setting</Link>
                      <Link to="/messages">Messages</Link>
                      <Link to="/orders">Orders</Link>
                      <Link to="/" onClick={handleLogout}>
                        Logout
                      </Link>
                    </div>
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <img src="/images/img.png" alt="avatar" />
                  <span>Sign In</span>
                </Link>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderPart;







// v1 return part
return (
  <header className="header">
    <Container
    // className="grid-container"
    >
      <Row>
        {/* simazon */}
        <Col xs={12} md={3}>
          {/* <div className="logo">
              <Link to="/">
                <img src="/images/logo.png" alt="logo" />
              </Link>
            </div> */}
          <div>
            <Link className="brand" to="/">
              simazon
            </Link>
          </div>
        </Col>
        {/* search bar */}
        <Col xs={12} md={6}>
          <div className="search">
            <Form onSubmit={handleSubmit}>
              <input
                name="search"
                value={search}
                onChange={handleSearch}
                placeholder="Search by ID or name or type ..."
              />
              <button type="button" onClick={handleOpen}>
                <i className="fa fa-filter"></i>
              </button>
              {open && (
                <div className="filter">
                  <label htmlFor="filter">Filter by</label>
                  <select
                    name="filter"
                    value={filter}
                    onChange={handleFilter}
                  >
                    <option value="">All</option>
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                    <option value="type">Type</option>
                  </select>
                </div>
              )}
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </Form>
          </div>
        </Col>
        {/* cart */}
        <Col xs={12} md={3}>
          <div className="cart">
            <Link to="/cart">
              Cart
              <FontAwesomeIcon icon={faCartShopping} />
              {cartItems.length > 0 && (
                <span className="badge">{getCartCount()}</span>
              )}
            </Link>

            {controller ? (
              <div className="dropdown">
                <Link to="#">
                  {params.username} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link
                      to="#profile"
                      // onClick={handleLogout}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#orders"
                      // onClick={handleLogout}
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#message"
                      // onClick={handleLogout}
                    >
                      Messages
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#setting"
                      // onClick={handleLogout}
                    >
                      Setting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      onClick={
                        // handleLogout
                        signout
                      }
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  </header>
);
}