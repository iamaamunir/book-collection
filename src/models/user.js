import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  password: String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "books" }],
  isActive: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

userSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified or is new
  if (!this.isModified("password")) {
    return next();
  }
  const hash = bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

userSchema.methods.isValidPassword = async function (password) {
  const compare = bcrypt.compare(password, this.password);
  return compare;
};

const userModel = mongoose.model("user", userSchema);
export default userModel;
