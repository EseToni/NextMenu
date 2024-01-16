"use client";

import React, { useState } from "react";
import styles from "./qr-section.module.scss";

const QRDownload = () => {
    const [qrSelected, setQrSelected] = useState({ size: "", style: "" });

    const handleSelectedQR = (size: string, style: string) => {
        setQrSelected({ size, style });
    };

    const SIZE = {
        small: "50 x 62 mm",
        medium: "105 x 134 mm",
        large: "148 x 190 mm",
    };

    const handleStyle = (style: string) => {
        if (qrSelected.style === style) {
            return styles[style];
        } else {
            return styles.default;
        }
    };

    return (
        <div className={styles.mainQRDownload}>
            <h3>Descarga el QR</h3>

            {Object.entries(SIZE).map(([key, value]) => (
                <section
                    key={key}
                    onClick={() => handleSelectedQR(value, key)}
                    className={handleStyle(key)}
                >
                    <div>
                        <h4>{key === "small" ? "Pequeño (ideal para mesas)" : key === "medium" ? "Mediano" : "Grande"}</h4>
                        <h5>{key === "small" ? "Din A4 con 24 QR" : key === "medium" ? "Din A4 con 4 QR" : "Din A4 con 2 QR"}</h5>
                    </div>
                    <h5>{value}</h5>
                </section>
            ))}

            <button>Descargar QR</button>
        </div>
    );
};

export default QRDownload;
