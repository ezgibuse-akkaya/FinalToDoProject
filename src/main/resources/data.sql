CREATE TABLE IF NOT EXISTS todo (
                                    id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                    title VARCHAR(255) NOT NULL,
    completed BOOLEAN
    );