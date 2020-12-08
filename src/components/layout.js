import React from "react"
import Header from "./header"
import Footer from "./footer"
import './../assets/css/theme.css';
import Helmet from 'react-helmet'
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="page-template page-template-page-blog page-template-page-blog-php page page-id-25395 mega-menu-primary-menu et_pb_button_helper_class et_fixed_nav et_show_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left et_pb_svg_logo et_pb_footer_columns4 et_cover_background et_pb_gutter linux et_pb_gutters3 et_pb_pagebuilder_layout et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css">
      <div
        id="page-container"
        className="et-animated-content"
        style={{ paddingTop: 0 }}
        data-is-root-path={isRootPath}
      >
        <Helmet>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Helmet>
        <Header />  
        <div id="et-main-area">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
};

export default Layout;
