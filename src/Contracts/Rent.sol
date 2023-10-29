// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FlatRental {
    // Define the owner of the contract
    address public owner;
    
    // Define the tenant of the flat
    address public tenant;
    
    // Define the security deposit and rent amount in wei
    uint256 public securityDeposit;
    uint256 public rentAmount;
    
    // Define the agreement details as a string
    string public agreement;
    
    // Define a boolean flag to indicate if the flat is rented or not
    bool public rented;
    
    // Define a modifier to check if the caller is the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }
    
    // Define a modifier to check if the caller is the tenant
    modifier onlyTenant() {
        require(msg.sender == tenant, "Only the tenant can call this function.");
        _;
    }
    
    // Define a modifier to check if the flat is available
    modifier onlyAvailable() {
        require(!rented, "The flat is already rented.");
        _;
    }
    
    // Define a modifier to check if the flat is occupied
    modifier onlyOccupied() {
        require(rented, "The flat is not rented.");
        _;
    }
    
    // Define an event to emit when the flat is rented
    event FlatRented(address tenant, uint256 securityDeposit, uint256 rentAmount, string agreement);
    
    // Define an event to emit when the flat is vacated
    event FlatVacated(address tenant, uint256 securityDeposit);
    
    // Define an event to emit when the rent is paid
    event RentPaid(address tenant, uint256 rentAmount);
    
    // Constructor to initialize the contract with the owner and the flat details
    constructor(uint256 _securityDeposit, uint256 _rentAmount) {
        owner = msg.sender;
        securityDeposit = _securityDeposit;
        rentAmount = _rentAmount;
        rented = false;
    }
    
    // Function to add a tenant and an agreement to the contract by the owner
    function addTenant(address _tenant, string memory _agreement) public onlyOwner onlyAvailable {
        tenant = _tenant;
        agreement = _agreement;
        rented = true;
        emit FlatRented(tenant, securityDeposit, rentAmount, agreement);
    }
    
    // Function to pay the security deposit and rent by the tenant
    function pay() public payable onlyTenant onlyOccupied {
        require(msg.value == securityDeposit + rentAmount, "The payment amount should be equal to the security deposit plus rent amount.");
        emit RentPaid(tenant, rentAmount);
    }
    
    // Function to vacate the flat and get back the security deposit by the tenant
    function vacate() public onlyTenant onlyOccupied {
        payable(tenant).transfer(securityDeposit);
        rented = false;
        emit FlatVacated(tenant, securityDeposit);
    }
}