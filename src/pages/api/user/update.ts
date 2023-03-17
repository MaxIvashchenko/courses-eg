import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../lib/prismadb';

const udateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: user
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

export default udateUser;
