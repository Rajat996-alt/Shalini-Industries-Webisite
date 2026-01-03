const Footer = () => {
  return (
    <div className="bg-linear-to-r from-[#fbffd8] to-[#faecca] pb-5">
      <div className="text-center">
        <h1 className="font-medium text-4xl">Crafted for Homes That Last</h1>
        <p className="text-sm text-neutral-400 w-2/5 m-auto mb-5 mt-4">
          Discover solid wood furniture designed with care, precision, and
          timeless craftsmanship — made to elevate everyday living.
        </p>
        <div className="w-full flex items-center justify-center gap-4">
          <button className="rounded-md p-2 bg-blue-400 text-white text-sm">
            Explore Collections
          </button>
          <button className="bg-neutral-200 rounded-md p-2 text-sm">
            Request Custom Furniture
          </button>
        </div>
      </div>

      <div className="w-[98%] m-auto rounded-2xl bg-white/50 backdrop-blur-2xl shadow mt-24">
        <div className="p-5 text-lg font-medium">
          <h3>Shalini Industries</h3>
          <h3>Gungun Art & Craft</h3>
        </div>

        <div className="flex justify-between">
          {/* contact info */}
          <div className="w-1/3 pl-5 text-sm">
            <div>
              <span></span>
              <p>Sangariya, Jodhpur, Rajasthan, India</p>
            </div>
            <div className="my-2">
              <span></span>
              <p>+91 XXXXXXXXXX</p>
            </div>
            <div>
              <span></span>
              <p>info@shaliniindustries.com</p>
            </div>
          </div>

          {/* links */}
          <div className="w-2/3 flex justify-around text-sm">
            {/* Collections */}
            <div>
              <p className="text-gray-500">Collections</p>
              <p className="my-2">Bedroom Furniture</p>
              <p>Living Room </p>
              <p className="my-2">Dining Furniture</p>
              <p>Office & Study</p>
              <p className="my-2">Storage Solutions</p>
              <p>Kitchen & Utility</p>
              <p className="my-2">Home Decor & Handicraft</p>
              <p>Outdoor & Garden</p>
            </div>

            {/* Custom Made */}
            <div>
              <p className="text-gray-500">Custom Made</p>
              <p className="my-2">Residential Furniture</p>
              <p>Hotel & Restaurant </p>
              <p className="my-2">Café Tables & Chairs</p>
              <p>Office Bulk Orders</p>
              <p className="my-2">Wooden Mandir</p>
              <p>Bespoke Projects</p>
            </div>

            {/* Materials */}
            <div>
              <p className="text-gray-500">Materials</p>
              <p className="my-2">Sheesham Wood</p>
              <p>Mango Wood </p>
              <p className="my-2">Reclaimed Wood</p>
              <p>Solid Wood</p>
            </div>

            {/* Company */}
            <div>
              <p className="text-gray-500">Company</p>
              <p className="my-2">Our Journey</p>
              <p>Craftsmanship </p>
              <p className="my-2">Export Markets</p>
              <p>Quality Standards</p>
              <p className="my-2">Contact Us</p>
            </div>
          </div>
        </div>

        {/* bottom legal line */}
        <div className="w-[98%] m-auto text-center mt-10 pb-4">
          <hr className="text-neutral-300" />
          <p className="mt-3 mb-2 text-xs text-gray-700">
            © 2025 Shalini Industries – Gungun Art & Craft, All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Privacy Policy • Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
