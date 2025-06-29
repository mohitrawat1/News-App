// Navbar.jsx
import React from 'react'

const Navbar = ({ setCategory, setCountry}) => { // <--- Accept setLanguage prop
    const categories = ["general", "business", "entertainment", "health", "science", "sports", "technology"];
    const countries = [
        { code: "ar", name: "Argentina" }, { code: "au", name: "Australia" }, { code: "be", name: "Belgium" },
        { code: "br", name: "Brazil" }, { code: "ca", name: "Canada" }, { code: "cn", name: "China" },
        { code: "de", name: "Germany" }, { code: "eg", name: "Egypt" }, { code: "fr", name: "France" },
        { code: "gb", name: "United Kingdom" }, { code: "gr", name: "Greece" }, { code: "hk", name: "Hong Kong" },
        { code: "id", name: "Indonesia" }, { code: "ie", name: "Ireland" }, { code: "in", name: "India" },
        { code: "it", name: "Italy" }, { code: "jp", name: "Japan" }, { code: "kr", name: "South Korea" },
        { code: "mx", name: "Mexico" }, { code: "my", name: "Malaysia" }, { code: "nl", name: "Netherlands" },
        { code: "nz", name: "New Zealand" }, { code: "ph", name: "Philippines" }, { code: "pt", name: "Portugal" },
        { code: "ru", name: "Russia" }, { code: "sa", name: "Saudi Arabia" }, { code: "sg", name: "Singapore" },
        { code: "th", name: "Thailand" }, { code: "tw", name: "Taiwan" }, { code: "ua", name: "Ukraine" },
        { code: "us", name: "United States" }, { code: "za", name: "South Africa" }
        // Add more countries as needed
    ];


    const handleCategoryClick = (category) => {
        setCategory(category);
    };

    const handleCountryClick = (countryCode) => {
        setCountry(countryCode);
    };



    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className='bg-light text-dark fs-4 badge'>News Now</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* Category Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle cursor-pointer" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    {categories.map((cat, index) => (
                                        <li key={index}>
                                            <a
                                                className="dropdown-item cursor-pointer"
                                                onClick={() => handleCategoryClick(cat)}
                                                role='button'
                                            >
                                                {cat.charAt(0).toUpperCase() + cat.slice(1)} {/* Capitalize first letter */}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {/* Country Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle cursor-pointer" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </a>
                                <ul className="dropdown-menu">
                                    {countries.map((country, index) => (
                                        <li key={index}>
                                            <a
                                                className="dropdown-item cursor-pointer"
                                                onClick={() => handleCountryClick(country.code)}
                                                role='button'
                                            >
                                                {country.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar