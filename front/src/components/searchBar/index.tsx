'use client';
import React, { useState, useEffect, useRef } from "react";

const SearchBar = () => {
    const [isActive, setIsActive] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Función para manejar clics fuera del input
    const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
            // Si se hace clic fuera del input, ocultar el input
            setIsActive(false);
        }
    };

    // Agregar event listener cuando el componente se monta
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleClass = () => {
        setIsActive(!isActive); // Alternar entre activo e inactivo al hacer clic en el botón
    };

    return (
        <div className="ml-20 relative" ref={wrapperRef}>
            <button className="flex items-center" onClick={toggleClass}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 mr-2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
                <span className="hidden md:block">Search</span>
            </button>
            {/* Input de búsqueda que se muestra/oculta */}
            <input
                type="text"
                name="search"
                placeholder="Search products"
                className={`h-7 pr-3 pl-10 py-2 placeholder-gray-500 text-black rounded-lg border-none outline-none absolute top-0 left-0 ${isActive ? 'block' : 'hidden'}`} // Aplicar clase 'block' si isActive es true, de lo contrario 'hidden'
            />
        </div>
    );
};

export default SearchBar;
