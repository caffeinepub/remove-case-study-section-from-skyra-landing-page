import Array "mo:core/Array";
import Int "mo:core/Int";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Time "mo:core/Time";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type ContactFormSubmission = {
    id : Nat;
    contactType : Text;
    name : Text;
    organization : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
    submittedBy : Principal;
  };

  module ContactFormSubmission {
    public func compare(submission1 : ContactFormSubmission, submission2 : ContactFormSubmission) : Order.Order {
      Int.compare(submission2.timestamp, submission1.timestamp);
    };
  };

  var nextId = 0;
  var contactFormSubmissions : [ContactFormSubmission] = [];

  // Public endpoint - anyone can submit contact form (including anonymous users)
  public shared ({ caller }) func submitContactForm(contactType : Text, name : Text, organization : Text, email : Text, message : Text) : async () {
    let submission = {
      id = nextId;
      contactType;
      name;
      organization;
      email;
      message;
      timestamp = Time.now();
      submittedBy = caller;
    };
    nextId += 1;
    contactFormSubmissions := [submission].concat(contactFormSubmissions);
  };

  // Admin-only query to get all contact form submissions
  public query ({ caller }) func getAllContactFormSubmissions() : async [ContactFormSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view submissions");
    };
    contactFormSubmissions.sort();
  };
};
