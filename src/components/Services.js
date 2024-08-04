import React from 'react';
import './Section.css'; // Import the CSS file

// Importing images from the images directory
import bitcoinLogo from './images/btc.png';
import ethereumLogo from './images/ethereum.png';
import solanaLogo from './images/solana.png';
import hyperledgerLogo from './images/hlf.png';
import cordaLogo from './images/corda.png';
import solidityLogo from './images/solidity1.png';
import rustLogo from './images/rust.png';
import javaLogo from './images/java.png';
import javascriptLogo from './images/javascript.webp';
import golangLogo from './images/golang.png';
import reactLogo from './images/react.png';

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="services-content">
                <h1 className="services-title">Our Services</h1>
                <p className="services-intro">
                    At <strong>Ledger Shift</strong>, we provide a range of innovative blockchain solutions designed to meet the unique needs of our clients. Explore our core services below and discover how we can help drive your business forward.
                </p>
                <div className="services-list">
                    <div className="service-item service-item-1">
                        <h2 className="service-title">Blockchain Development</h2>
                        <p className="service-description">
                            Custom blockchain development tailored to your business needs. Our team creates secure and scalable blockchain solutions to enhance your operations.
                        </p>
                    </div>
                    <div className="service-item service-item-2">
                        <h2 className="service-title">Smart Contract Auditing</h2>
                        <p className="service-description">
                            Comprehensive auditing of smart contracts to ensure security and efficiency. We identify vulnerabilities and provide recommendations for improvement.
                        </p>
                    </div>
                    <div className="service-item service-item-3">
                        <h2 className="service-title">Blockchain Consulting</h2>
                        <p className="service-description">
                            Expert consulting services to guide you through the blockchain landscape. We offer strategic advice and technical expertise to help you achieve your goals.
                        </p>
                    </div>
                    <div className="service-item service-item-4">
                        <h2 className="service-title">Token Development</h2>
                        <p className="service-description">
                            Development of custom tokens for your blockchain projects. We create and deploy tokens that meet your specific requirements and goals.
                        </p>
                    </div>
                    <div className="service-item service-item-5">
                        <h2 className="service-title">DeFi Solutions</h2>
                        <p className="service-description">
                            Decentralized Finance (DeFi) solutions to revolutionize traditional financial services. We build robust DeFi platforms that are secure and user-friendly.
                        </p>
                    </div>
                    <div className="service-item service-item-6">
                        <h2 className="service-title">NFT Development</h2>
                        <p className="service-description">
                            Create and manage Non-Fungible Tokens (NFTs) with ease. Our services include NFT minting, management, and integration with blockchain networks.
                        </p>
                    </div>
                </div>

                {/* New Blockchain Types Section */}
                <div className="blockchain-types">
                    <h1 className="blockchain-types-title">Blockchain Types</h1>
                    <p className="blockchain-types-intro">
                        At <strong>Ledger Shift</strong>, we work with various types of blockchains to provide the best solutions for our clients. Learn about public and private blockchains below.
                    </p>
                    <div className="blockchain-types-list">
                        <div className="blockchain-type-item blockchain-type-item-1">
                            <img src={bitcoinLogo} alt="Bitcoin Logo" className="blockchain-logo" />
                            <img src={ethereumLogo} alt="Ethereum Logo" className="blockchain-logo" />
                            <img src={solanaLogo} alt="Solana Logo" className="blockchain-logo" />
                            <h2 className="blockchain-type-title">Public Blockchains</h2>
                            <p className="blockchain-type-description">
                                Public blockchains are decentralized and open to anyone. They provide a high level of transparency and security. Examples include:
                                <ul>
                                    <li>Bitcoin</li>
                                    <li>Ethereum</li>
                                    <li>Solana</li>
                                </ul>
                            </p>
                        </div>
                        <div className="blockchain-type-item blockchain-type-item-2">
                            <img src={hyperledgerLogo} alt="Hyperledger Logo" className="blockchain-logo" />
                            <img src={cordaLogo} alt="Corda Logo" className="blockchain-logo" />
                            <h2 className="blockchain-type-title">Private Blockchains</h2>
                            <p className="blockchain-type-description">
                                Private blockchains are restricted to a specific group of participants. They offer enhanced privacy and control. Examples include:
                                <ul>
                                    <li>Hyperledger Fabric</li>
                                    <li>Corda</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                {/* New Languages Section */}
                <div className="languages">
                    <h1 className="languages-title">Technologies We Use</h1>
                    <p className="languages-intro">
                        Our team utilizes a variety of programming languages and frameworks to build robust and scalable blockchain solutions.
                    </p>
                    <div className="languages-list">
                        <div className="language-item language-item-1">
                            <img src={solidityLogo} alt="Solidity Logo" className="language-logo" />
                            <h2 className="language-title">Solidity</h2>
                        </div>
                        <div className="language-item language-item-2">
                            <img src={rustLogo} alt="Rust Logo" className="language-logo" />
                            <h2 className="language-title">Rust</h2>
                        </div>
                        <div className="language-item language-item-3">
                            <img src={javaLogo} alt="Java Logo" className="language-logo" />
                            <h2 className="language-title">Java</h2>
                        </div>
                        <div className="language-item language-item-4">
                            <img src={javascriptLogo} alt="JavaScript Logo" className="language-logo" />
                            <h2 className="language-title">JavaScript</h2>
                        </div>
                        <div className="language-item language-item-5">
                            <img src={golangLogo} alt="GoLang Logo" className="language-logo" />
                            <h2 className="language-title">GoLang</h2>
                        </div>
                        <div className="language-item language-item-6">
                            <img src={reactLogo} alt="React Logo" className="language-logo" />
                            <h2 className="language-title">React</h2>
                        </div>
                    </div>
                </div>
                {/* New Projects Section */}
                <div className="projects">
                    <h1 className="projects-title">Our Projects</h1>
                    <p className="projects-intro">
                        Our projects span across diverse industries and blockchain technologies, addressing real-world challenges with innovative solutions. Discover some of our standout projects:
                    </p>
                    <div className="projects-list">
                        <div className="project-item project-item-1">
                            <h2 className="project-title">Supply Chain Transparency</h2>
                            <p className="project-description">
                                Implemented a blockchain solution for supply chain management that enhances transparency, traceability, and efficiency. Key features include real-time tracking and fraud prevention.
                            </p>
                        </div>
                        <div className="project-item project-item-2">
                            <h2 className="project-title">Healthcare Data Security</h2>
                            <p className="project-description">
                                Developed a blockchain-based system for secure patient data management, ensuring compliance with privacy regulations and facilitating secure data sharing among healthcare providers.
                            </p>
                        </div>
                        <div className="project-item project-item-3">
                            <h2 className="project-title">DeFi Loan Issuing</h2>
                            <p className="project-description">
                                Created a decentralized finance (DeFi) platform for issuing and managing loans using Hyperledger Fabric, improving access to financial services and reducing transaction costs.
                            </p>
                        </div>
                        <div className="project-item project-item-4">
                            <h2 className="project-title">Banking on Corda</h2>
                            <p className="project-description">
                                Implemented a user management system for banking applications on R3 Corda, enhancing security and operational efficiency in managing customer identities and transactions.
                            </p>
                        </div>
                        <div className="project-item project-item-5">
                            <h2 className="project-title">Tokenization on Public Chains</h2>
                            <p className="project-description">
                                Developed and deployed tokens on major public blockchains, including Bitcoin for secure transactions, Ethereum for smart contracts, and Solana for fast, cost-effective applications.
                            </p>
                        </div>
                        <div className="project-item project-item-6">
                            <h2 className="project-title">NFT Marketplace on Ethereum</h2>
                            <p className="project-description">
                                Built a marketplace for Non-Fungible Tokens (NFTs) on the Ethereum blockchain, enabling users to buy, sell, and trade unique digital assets securely and transparently.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
