import numpy as np
import cv2


class Image_In_Image:
    def __init__(self, src_img, dest_img, output_name, memorize, dest_h_img_size, dest_w_img_size):
        self.img = cv2.imread(src_img)
        self.h = self.img.shape[0]
        self.w = self.img.shape[1]
        self.o = self.img.shape[2]

        self.img2 = cv2.imread(dest_img)
        self.h2 = dest_h_img_size
        self.w2 = dest_w_img_size
        self.img2 = cv2.resize(self.img2, (dest_w_img_size, dest_h_img_size))

        self.seed = memorize
        self.name = output_name

    def image_in_image(self):
        self.img = self.img.flatten()
        self.img2 = self.img2.flatten()

        list_of_bites = list(format(x, 'b').zfill(8) for x in self.img2)
        count_of_bites = len(list_of_bites) * 8

        np.random.seed(self.seed)
        list_of_index = list(np.random.choice(self.img.shape[0], size=count_of_bites, replace=False))

        for i, bite in enumerate(list_of_bites):
            for j, bit in enumerate(bite):
                index = (i * 8) + j
                index_of_flatten_img = list_of_index[index]
                pixel_value = self.img[index_of_flatten_img]

                if (bit == '0') and (pixel_value % 2 == 0):
                    self.img[index_of_flatten_img] = self.img[index_of_flatten_img]
                elif (bit == '0') and (pixel_value % 2 == 1):
                    self.img[index_of_flatten_img] = self.img[index_of_flatten_img] - 1
                elif (bit == '1') and (pixel_value % 2 == 0):
                    self.img[index_of_flatten_img] = self.img[index_of_flatten_img] + 1
                elif (bit == '1') and (pixel_value % 2 == 1):
                    self.img[index_of_flatten_img] = self.img[index_of_flatten_img]

        self.img = np.reshape(self.img, (self.h, self.w, self.o))

        cv2.imwrite(self.name, self.img)
        return count_of_bites


class Image_from_Image:
    def __init__(self, src_img, output_name, key, memorize, dest_h_img_size, dest_w_img_size):
        self.output = None
        self.name = output_name
        self.img = cv2.imread(src_img)

        self.count_of_bites = key
        self.h = dest_h_img_size
        self.w = dest_w_img_size
        self.o = int(key / (dest_w_img_size * dest_h_img_size * 8))

        self.seed = memorize

    def image_from_image(self):
        self.img = self.img.flatten()

        np.random.seed(self.seed)
        list_of_index = list(np.random.choice(self.img.shape[0], size=self.count_of_bites, replace=False))

        bite_value = ''
        list_of_bites = []
        for i, index in enumerate(list_of_index):

            if self.img[index] % 2 == 0:
                bite_value = bite_value + '0'
            elif self.img[index] % 2 == 1:
                bite_value = bite_value + '1'
            if i % 8 == 7:
                list_of_bites.append(bite_value)
                bite_value = ''

        self.output = []
        for bite in list_of_bites:
            ascii_code = int(bite, 2)
            self.output.append(ascii_code)

        self.output = np.array(self.output)
        self.output = np.reshape(self.output, (self.h, self.w, self.o))

        cv2.imwrite(self.name, self.output)


test = Image_In_Image("3.jpg", "6.jpg", "output_test5.png", 100, 500, 500)
key = test.image_in_image()
print(key)

extract = Image_from_Image("output_test5.png", "output5_test.png", key, 100, 500, 500)
extract.image_from_image()
