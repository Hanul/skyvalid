class Validator {

    public notEmpty(value: string | undefined) {
        return typeof value === "string" && value.trim() !== "";
    }
}

export default new Validator();
