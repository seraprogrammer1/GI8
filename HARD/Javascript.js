// function that allow you to create new worker objects
// while keeping all there information private
class worker {
  #PII;
  #Access;
  #Job;

  constructor(Access, Job, Name, Address, SSN, DOB, Email) {
    this.#Access = Access;
    this.#Job = Job;
    this.#PII = {
      Name: Name,
      SSN: SSN,
      DOB: DOB,
      Address: Address,
      Email: Email,
    };
  }
  getAccess() {
    return this.#Access;
  }
  getJob() {
    return this.#Job;
  }
  getName(worker) {
    if (!worker | (typeof worker != Object)) {
      return "Access Denied Unknown Worker";
    }
    if (worker.getAccess() >= 1) {
      return this.#PII.Name;
    } else {
      return "Access Denied";
    }
  }
  getSSN(worker) {
    if (!worker | (typeof worker != Object)) {
      return "Access Denied Unknown Worker";
    }
    if (worker.getAccess() >= 3) {
      return this.#PII.SSN;
    } else {
      return "Access Denied";
    }
  }
  getDOB(worker) {
    if (!worker | (typeof worker != Object)) {
      return "Access Denied Unknown Worker";
    }
    if (worker.getAccess() >= 2) {
      return this.#PII.DOB;
    } else {
      return "Access Denied";
    }
  }
  getEmail(worker) {
    if (!worker | (typeof worker != Object)) {
      return "Access Denied Unknown Worker";
    }
    if (worker.getAccess() >= 1) {
      return this.#PII.Email;
    } else {
      return "Access Denied";
    }
  }
}

// function that allow you to create new patient objects
// while keeping all there information private
class patient {
  #PII;

  constructor(Name, Address, SSN, DOB, Email) {
    this.#PII = {
      Name: Name,
      SSN: SSN,
      DOB: DOB,
      Address: Address,
      Email: Email,
    };
  }

  // function check access level and if high enough returns information
  getName(worker) {
    if (!worker | (typeof worker != Object)) {
      return "Access Denied Unknown Worker";
    }
    if (worker.getAccess() >= 1) {
      return this.#PII.Name;
    } else {
      return "Access Denied";
    }
  }
  getSSN(worker) {
    if (!worker | (typeof worker != Object)) {
      return "Access Denied Unknown Worker";
    }
    if (worker.getAccess() >= 3) {
      return this.#PII.SSN;
    } else {
      return "Access Denied";
    }
  }
  getDOB(worker) {
    if (!worker | (typeof worker != Object)) {
      return "Access Denied Unknown Worker";
    }
    if (worker.getAccess() >= 2) {
      return this.#PII.DOB;
    } else {
      return "Access Denied";
    }
  }
  getEmail(worker) {
    if (!worker | (typeof worker != Object)) {
      return "Access Denied Unknown Worker";
    }
    if (worker.getAccess() >= 1) {
      return this.#PII.Email;
    } else {
      return "Access Denied";
    }
  }
}

// creates a new object called worker1
let worker1 = new worker(
  1,
  "Delivery Driver",
  "Jame",
  "1231 Builder road",
  "103-04-0506",
  "04/19/2003",
  "Jamesdiver4@gmail.com"
);
let worker2 = new worker(
  2,
  "Nurse",
  "Mary",
  "1232 Builder road",
  "104-05-0607",
  "08/28/2003",
  "Mary132@gmail.com"
);

// creates a new object called patient2
let patient1 = new patient(
  "bob",
  "1233 Builder road",
  "102-03-0405",
  "04/19/2003",
  "BobTheBuilder12@gmail.com"
);
let patient2 = new patient(
  "John",
  "1234 Builder road",
  "123-45-6789",
  "04/15/2004",
  "JohnTheBuilder7000gmail.com"
);

console.log(patient2.Name);
console.log(patient2.SSN);

console.log(patient2.getName(worker1));
console.log(patient2.getSSN(worker1));
